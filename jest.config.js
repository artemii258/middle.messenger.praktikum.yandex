module.exports = {
	verbose: true,
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleDirectories: ['node_modules', 'src'],
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
		'\\.(pug)$': 'jest-transform-pug'
	},
	moduleNameMapper: {
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/mocks/fileMock.js',
		'\\.(css|less)$': '<rootDir>/mocks/fileMock.js',
		'\\.(css|less|scss)$': 'identity-obj-proxy'
	},
	testEnvironment: 'jsdom',
	transformIgnorePatterns: ['/node_modules/(?!formidable)']
};
