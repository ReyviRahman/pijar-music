import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1366,height:699}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://localhost:5173');await page.evaluate(()=>document.fonts.ready);
await page.screenshot({path:'desktop.png'});
await page.getByRole('link',{name:'Discover',exact:true}).click();
await page.getByRole('textbox',{name:'Search',exact:true}).fill('Lima');
assert.equal(await page.locator('.concert').count(),1);
await page.locator('.concert').click();await page.getByRole('button',{name:'Close',exact:true}).click();
await page.getByRole('button',{name:'Reset filters'}).click();assert.equal(await page.locator('.concert').count(),4);
for(const route of ['home','store','about','discover']){
 await page.goto('http://localhost:5173/#'+route);await page.waitForTimeout(250);
 const broken=await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));assert.deepEqual(broken,[],route+' broken assets');
 await page.screenshot({path:route+'-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:route+'-mobile.png',fullPage:true});
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route+' horizontal overflow');
 await page.setViewportSize({width:1366,height:699});
}
assert.deepEqual(errors,[]);await browser.close();console.log('PASS: navigation, search, reset, dialog, assets, desktop/mobile overflow, runtime errors');
