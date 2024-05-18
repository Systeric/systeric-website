import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const systericTheme: CustomThemeConfig = {
	name: 'systeric-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #011a2f
		"--color-primary-50": "217 221 224", // #d9dde0
		"--color-primary-100": "204 209 213", // #ccd1d5
		"--color-primary-200": "192 198 203", // #c0c6cb
		"--color-primary-300": "153 163 172", // #99a3ac
		"--color-primary-400": "77 95 109", // #4d5f6d
		"--color-primary-500": "1 26 47", // #011a2f
		"--color-primary-600": "1 23 42", // #01172a
		"--color-primary-700": "1 20 35", // #011423
		"--color-primary-800": "1 16 28", // #01101c
		"--color-primary-900": "0 13 23", // #000d17
		// secondary | #029ddc
		"--color-secondary-50": "217 240 250", // #d9f0fa
		"--color-secondary-100": "204 235 248", // #ccebf8
		"--color-secondary-200": "192 231 246", // #c0e7f6
		"--color-secondary-300": "154 216 241", // #9ad8f1
		"--color-secondary-400": "78 186 231", // #4ebae7
		"--color-secondary-500": "2 157 220", // #029ddc
		"--color-secondary-600": "2 141 198", // #028dc6
		"--color-secondary-700": "2 118 165", // #0276a5
		"--color-secondary-800": "1 94 132", // #015e84
		"--color-secondary-900": "1 77 108", // #014d6c
		// tertiary | #ecf5fd
		"--color-tertiary-50": "252 254 255", // #fcfeff
		"--color-tertiary-100": "251 253 255", // #fbfdff
		"--color-tertiary-200": "250 253 255", // #fafdff
		"--color-tertiary-300": "247 251 254", // #f7fbfe
		"--color-tertiary-400": "242 248 254", // #f2f8fe
		"--color-tertiary-500": "236 245 253", // #ecf5fd
		"--color-tertiary-600": "212 221 228", // #d4dde4
		"--color-tertiary-700": "177 184 190", // #b1b8be
		"--color-tertiary-800": "142 147 152", // #8e9398
		"--color-tertiary-900": "116 120 124", // #74787c
		// success | #049e69
		"--color-success-50": "217 240 233", // #d9f0e9
		"--color-success-100": "205 236 225", // #cdece1
		"--color-success-200": "192 231 218", // #c0e7da
		"--color-success-300": "155 216 195", // #9bd8c3
		"--color-success-400": "79 187 150", // #4fbb96
		"--color-success-500": "4 158 105", // #049e69
		"--color-success-600": "4 142 95", // #048e5f
		"--color-success-700": "3 119 79", // #03774f
		"--color-success-800": "2 95 63", // #025f3f
		"--color-success-900": "2 77 51", // #024d33
		// warning | #f0ad4e
		"--color-warning-50": "253 243 228", // #fdf3e4
		"--color-warning-100": "252 239 220", // #fcefdc
		"--color-warning-200": "251 235 211", // #fbebd3
		"--color-warning-300": "249 222 184", // #f9deb8
		"--color-warning-400": "245 198 131", // #f5c683
		"--color-warning-500": "240 173 78", // #f0ad4e
		"--color-warning-600": "216 156 70", // #d89c46
		"--color-warning-700": "180 130 59", // #b4823b
		"--color-warning-800": "144 104 47", // #90682f
		"--color-warning-900": "118 85 38", // #765526
		// error | #dc3545
		"--color-error-50": "250 225 227", // #fae1e3
		"--color-error-100": "248 215 218", // #f8d7da
		"--color-error-200": "246 205 209", // #f6cdd1
		"--color-error-300": "241 174 181", // #f1aeb5
		"--color-error-400": "231 114 125", // #e7727d
		"--color-error-500": "220 53 69", // #dc3545
		"--color-error-600": "198 48 62", // #c6303e
		"--color-error-700": "165 40 52", // #a52834
		"--color-error-800": "132 32 41", // #842029
		"--color-error-900": "108 26 34", // #6c1a22
		// surface | #ffffff
		"--color-surface-50": "255 255 255", // #ffffff
		"--color-surface-100": "255 255 255", // #ffffff
		"--color-surface-200": "255 255 255", // #ffffff
		"--color-surface-300": "255 255 255", // #ffffff
		"--color-surface-400": "255 255 255", // #ffffff
		"--color-surface-500": "255 255 255", // #ffffff
		"--color-surface-600": "230 230 230", // #e6e6e6
		"--color-surface-700": "191 191 191", // #bfbfbf
		"--color-surface-800": "153 153 153", // #999999
		"--color-surface-900": "125 125 125", // #7d7d7d
	}
}
