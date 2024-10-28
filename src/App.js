import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const map = new Map();

    const carNames = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const trimmedCarNames = carNames.split(',').map((name) => name.trim());

    for (const carName of trimmedCarNames) {
      if (carName) map.set(carName, '');
    }

    const raceRounds = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    await MissionUtils.Console.print('\n실행 결과');

    for (let i = 0; i < raceRounds; i++) {
      await MissionUtils.Console.print('\n');
      for (const [carName, distance] of map) {
        const pickNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if (pickNumber >= 4) {
          map.set(carName, map.get(carName) + '-');
        }
        await MissionUtils.Console.print(`${carName} : ${map.get(carName)}`);
      }
    }
  }
}

export default App;
