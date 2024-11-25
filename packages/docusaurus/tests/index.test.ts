import { expect, test } from 'vitest';
import { createDocusaurusConfig, classicPreset, themeConfig } from '../src';

test('createDocusaurusConfig', () => {
  const result = createDocusaurusConfig(
    { organizationName: 'elcoosp', projectName: 'readma' },
    (derived) => {
      return {
        tagline: 'Beautiful effortless README generator',
        plugins: [],
        presets: [classicPreset(derived)],
        themeConfig: themeConfig(derived),
      };
    },
  );
expect(result).toMatchSnapshot()
});