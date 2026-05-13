import {test,expect} from '@playwright/test';
test('browser',async({page})=>{
await page.goto('https://letcode.in/button')

 // 1. Get the X & Y coordinates of the “Position” button
  const positionBtn = await page.locator('#position');
  const box = await positionBtn.boundingBox();
  console.log('X:', box.x, 'Y:', box.y);

  // 3. Get the Width & Height of that same button
   const hw =await page.locator('#property');
   const hw1 = await hw.boundingBox();
  console.log('Width:', hw1.width, 'Height:', hw1.height);

  // 4. Get the background-colour of the “Color” button
  const colourBtn = page.locator('#color');
  const bgColor = await colourBtn.evaluate(el => getComputedStyle(el).backgroundColor);
  console.log('Background Colour:', bgColor);

  // 5. Verify the “Disabled” button is actually disabled
  const disabledBtn = page.locator('[title="Disabled button"]');
  const isEnabled = await disabledBtn.isEnabled();
  console.log('Is Enabled?:', isEnabled);
  

//   const holdBtn = await page.getByText(' Button Hold!');// Mouse press and hold for 2 seconds
//   await holdBtn.hover();
//   await page.mouse.down();     // press & hold start
//   await page.waitForTimeout(2000); // hold 2 sec
//   await page.mouse.up();// release
// 6️⃣ Button Hold (IMPORTANT 🔥)
  const holdBtn = page.locator('text=Button Hold!');
  await holdBtn.waitFor();

  const holdBox = await holdBtn.boundingBox();

  await page.mouse.move(
    holdBox.x + holdBox.width / 2,
    holdBox.y + holdBox.height / 2
  );

  await page.mouse.down();           // press
  await page.waitForTimeout(2000);   // hold 2 sec
  await page.mouse.up(); 
})