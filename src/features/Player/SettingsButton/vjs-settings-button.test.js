/* eslint-disable new-cap */
/* eslint-disable no-undef */
import videojs from 'video.js';
import vjsSettingsButton from './vjs-settings-button';

const player = {
  state: {
    settingsMenuOpened: false
  }
};

player.setState = jest.fn((newState) => {
  player.state = { ...player.state, ...newState };
  return player.state;
});

let button = null;

const badgeClass = 'quality-badge';
const hdBadgeClass = 'hd-badge';
const fkBadgeClass = 'fk-badge';

beforeEach(() => {
  button = new vjsSettingsButton(player);
});

afterEach(() => {
  player.setState.mockClear();
});

test('button must be registered', () => {
  expect(videojs.getComponent('vjsSettingsButton')).toBeDefined();
});

test('button should have control text', () => {
  const controlText = 'Settings';

  expect(button.controlText()).toEqual(controlText);
});

test('button should have css class', () => {
  const className = 'vjs-settings-control';

  expect(button.el().classList).toContain(className);
});

test('settingsMenuOpened player state should be toggle when clicked', () => {
  button.handleClick();

  expect(player.setState.mock.calls.length).toBe(1);
  expect(player.state).toEqual({ settingsMenuOpened: true });

  button.handleClick();

  expect(player.setState.mock.calls.length).toBe(2);
  expect(player.state).toEqual({ settingsMenuOpened: false });
});

test("should'nt have badge when called with empty args", () => {
  button.setQualityBadge();

  expect(button.el().classList).not.toContain(badgeClass);
  expect(button.el().classList).not.toContain(hdBadgeClass);
  expect(button.el().classList).not.toContain(fkBadgeClass);
});

test('should have hd badge', () => {
  button.setQualityBadge('HD');

  expect(button.el().classList).toContain(badgeClass);
  expect(button.el().classList).toContain(hdBadgeClass);
});

test('should have fk badge', () => {
  button.setQualityBadge('FK');

  expect(button.el().classList).toContain(badgeClass);
  expect(button.el().classList).toContain(fkBadgeClass);
});
