const iconPath = require('../assets/scripts/main');

describe('tests for formatVolumeIconPath', () => {
	test('volume level 3', () => {
		for (let testVolume = 67; testVolume <= 100; testVolume++) {
			expect(iconPath(testVolume)).toContain('3');	
			expect(iconPath(testVolume)).not.toContain('2');
			expect(iconPath(testVolume)).not.toContain('1');
			expect(iconPath(testVolume)).not.toContain('0');
		}	
	})

	test('volume level 2', () => {
		for (let testVolume = 34; testVolume < 67; testVolume++) {
			expect(iconPath(testVolume)).toContain('2');
			expect(iconPath(testVolume)).not.toContain('3');
			expect(iconPath(testVolume)).not.toContain('1');
			expect(iconPath(testVolume)).not.toContain('0');
		}
	});

	test('volume level 1', () => {
		for (let testVolume = 1; testVolume < 34; testVolume++) {
			expect(iconPath(testVolume)).toContain('1');
			expect(iconPath(testVolume)).not.toContain('3');
			expect(iconPath(testVolume)).not.toContain('2');
			expect(iconPath(testVolume)).not.toContain('0');
		}
	});

	test('volume level 0', () => {
			let testVolume = 0;	
			expect(iconPath(testVolume)).toContain('0');
			expect(iconPath(testVolume)).not.toContain('3');
			expect(iconPath(testVolume)).not.toContain('2');
			expect(iconPath(testVolume)).not.toContain('1');
	});
});
