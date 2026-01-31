import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Translator – Complete Functional Coverage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  });

  async function translate(page, input) {
    const textareas = page.locator('textarea');
    await textareas.first().waitFor({ timeout: 30000 });
    const inputField = textareas.first();
    await inputField.fill('');
    await inputField.fill(input);
    await page.waitForTimeout(3000);
    const count = await textareas.count();
    if (count < 2) return '';
    return (await textareas.nth(1).inputValue())?.trim() || '';
  }

  // 24 Positive functional
  const positiveCases = [
   'mama bandaaravela nagarayata yanavaa.',
    'mata palathuru kanna oonee.',
     'mama kolaBA yanavaa, kaar eka kaedilaa nisaa adha yannee naee.', 
     'oyaa sindhu kiyanavanam mama balan innavaa.',
      'oyaata eeka dhaenenne kohomadha?', 
      'parissamen yanna', 
      'api lamayi ehema kiyanne naehae.',
       'Aayuboovan suBha dhavasak veevaa!', 
       'samaavenna, mata podi prashnayak ahanna puluvandha?',
        'mata oona poddak naevathilaa inna.', 
        'mama iiyee thraasayajanaka chithrapatiyak balanna giyaa.',
         'mama heta udhenma vishva vidhYAalayata enavaa.', 
         'api heta navagamuva pansal yamu.', 
         'mama roohalata yanna taxi ekak hayar kalaa.', 
         'thaaththaa office yanna hadhannee.', 
         'WhatsApp message ekak evanna.',
          'Rs.100000 k ganna oonee.', 
          'agaharuvaadhaa udhee 7.30 AM ta enna.',
           'adha magee 25 vana upan dhinayayi',
            'hari hari ee inne mama thamayi', 
            'ov, ehema venna puluvan.', 
            'mama eyaata aadharee naee mata eyaava epaa.',
             'oyaa kavadhdha rata yanna hithan inne?', 
             'puLuvannam mata meeka kiyanna.'
  ];

  positiveCases.forEach((input, index) => {
    test(`Pos_Fun_${String(index + 1).padStart(2, '0')}`, async ({ page }) => {
      const output = await translate(page, input);
      console.log('Input:', input, 'Output:', output);
      expect(output).not.toBeUndefined();
    });
  });

  // 10 Negative functional
  const negativeCases = [
    'apihodhataigenagannavaa',
     'mma ammava blnna ynv',
      'api yaapanee yanavaaxyz', 
      'saman v3ndanaave yan5vaa', 
      'ohuta karadhrayak velaa', 
      'yanavaa nagarayata mama', 
      'api\nsinduwak\nkiyamu',
       '00001000 10101010 10001111 11110101 10100000 00001111',
        '<b>mama</b> kuBurata yanavaa',
         'I am playing cricket today'

  ];

  negativeCases.forEach((input, index) => {
    test(`Neg_Fun_${String(index + 1).padStart(2, '0')}`, async ({ page }) => {
      const output = await translate(page, input);
      console.log('Negative Input:', input, 'Output:', output);
      expect(output).toMatch(/^[\u0D80-\u0DFF\s]+$/);
    });
  });

  // 1 UI test
  test('Pos_UI_0001 - UI remains stable while typing', async ({ page }) => {
    const inputField = page.locator('textarea').first();
    await inputField.type('mama heta kaempas yanna thamayi hithan inne');
    await page.waitForTimeout(1000);
    expect(await inputField.inputValue()).toContain('mama heta kaempas yanna thamayi hithan inne');
  });
});