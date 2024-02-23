import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const systericTheme: CustomThemeConfig = {
	name: 'systeric-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `inter`,
		'--theme-font-family-heading': `inter`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #18387e
		'--color-primary-50': '220 225 236', // #dce1ec
		'--color-primary-100': '209 215 229', // #d1d7e5
		'--color-primary-200': '197 205 223', // #c5cddf
		'--color-primary-300': '163 175 203', // #a3afcb
		'--color-primary-400': '93 116 165', // #5d74a5
		'--color-primary-500': '24 56 126', // #18387e
		'--color-primary-600': '22 50 113', // #163271
		'--color-primary-700': '18 42 95', // #122a5f
		'--color-primary-800': '14 34 76', // #0e224c
		'--color-primary-900': '12 27 62', // #0c1b3e
		// secondary | #00a1dd
		'--color-secondary-50': '217 241 250', // #d9f1fa
		'--color-secondary-100': '204 236 248', // #ccecf8
		'--color-secondary-200': '191 232 247', // #bfe8f7
		'--color-secondary-300': '153 217 241', // #99d9f1
		'--color-secondary-400': '77 189 231', // #4dbde7
		'--color-secondary-500': '0 161 221', // #00a1dd
		'--color-secondary-600': '0 145 199', // #0091c7
		'--color-secondary-700': '0 121 166', // #0079a6
		'--color-secondary-800': '0 97 133', // #006185
		'--color-secondary-900': '0 79 108', // #004f6c
		// tertiary | #56358F
		'--color-tertiary-50': '230 225 238', // #e6e1ee
		'--color-tertiary-100': '221 215 233', // #ddd7e9
		'--color-tertiary-200': '213 205 227', // #d5cde3
		'--color-tertiary-300': '187 174 210', // #bbaed2
		'--color-tertiary-400': '137 114 177', // #8972b1
		'--color-tertiary-500': '86 53 143', // #56358F
		'--color-tertiary-600': '77 48 129', // #4d3081
		'--color-tertiary-700': '65 40 107', // #41286b
		'--color-tertiary-800': '52 32 86', // #342056
		'--color-tertiary-900': '42 26 70', // #2a1a46
		// success | #00773A
		'--color-success-50': '217 235 225', // #d9ebe1
		'--color-success-100': '204 228 216', // #cce4d8
		'--color-success-200': '191 221 206', // #bfddce
		'--color-success-300': '153 201 176', // #99c9b0
		'--color-success-400': '77 160 117', // #4da075
		'--color-success-500': '0 119 58', // #00773A
		'--color-success-600': '0 107 52', // #006b34
		'--color-success-700': '0 89 44', // #00592c
		'--color-success-800': '0 71 35', // #004723
		'--color-success-900': '0 58 28', // #003a1c
		// warning | #CA7E00
		'--color-warning-50': '247 236 217', // #f7ecd9
		'--color-warning-100': '244 229 204', // #f4e5cc
		'--color-warning-200': '242 223 191', // #f2dfbf
		'--color-warning-300': '234 203 153', // #eacb99
		'--color-warning-400': '218 165 77', // #daa54d
		'--color-warning-500': '202 126 0', // #CA7E00
		'--color-warning-600': '182 113 0', // #b67100
		'--color-warning-700': '152 95 0', // #985f00
		'--color-warning-800': '121 76 0', // #794c00
		'--color-warning-900': '99 62 0', // #633e00
		// error | #B02626
		'--color-error-50': '243 222 222', // #f3dede
		'--color-error-100': '239 212 212', // #efd4d4
		'--color-error-200': '235 201 201', // #ebc9c9
		'--color-error-300': '223 168 168', // #dfa8a8
		'--color-error-400': '200 103 103', // #c86767
		'--color-error-500': '176 38 38', // #B02626
		'--color-error-600': '158 34 34', // #9e2222
		'--color-error-700': '132 29 29', // #841d1d
		'--color-error-800': '106 23 23', // #6a1717
		'--color-error-900': '86 19 19', // #561313
		// surface | #EEF3F9
		'--color-surface-50': '252 253 254', // #fcfdfe
		'--color-surface-100': '252 253 254', // #fcfdfe
		'--color-surface-200': '251 252 254', // #fbfcfe
		'--color-surface-300': '248 250 253', // #f8fafd
		'--color-surface-400': '243 247 251', // #f3f7fb
		'--color-surface-500': '238 243 249', // #EEF3F9
		'--color-surface-600': '214 219 224', // #d6dbe0
		'--color-surface-700': '179 182 187', // #b3b6bb
		'--color-surface-800': '143 146 149', // #8f9295
		'--color-surface-900': '117 119 122' // #75777a
	}
};
