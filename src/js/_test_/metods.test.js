import Zombie from '../zombie';

test('levelUp health=100', () => {
  const hero = new Zombie('Character');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'Character',
    type: 'Zombie',
    health: 100,
    attack: 48,
    defence: 12,
    level: 2,
  });
});

test('levelUp health=0', () => {
  const hero = new Zombie('Character');
  hero.health = 0;
  expect(() => {
    hero.levelUp();
  }).toThrowError('нельзя повысить level умершего');
});

test('damage, health=100, points=20', () => {
  const hero = new Zombie('Character');
  hero.damage(20);
  expect(hero).toEqual({
    name: 'Character',
    type: 'Zombie',
    health: 82,
    attack: 40,
    defence: 10,
    level: 1,
  });
});

test('damage, health=10, points=30', () => {
  const hero = new Zombie('Character');
  hero.health = 10;
  hero.damage(30);
  expect(hero).toEqual({
    name: 'Character',
    type: 'Zombie',
    health: 0,
    attack: 40,
    defence: 10,
    level: 1,
  });
});
