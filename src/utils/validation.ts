export const validation = (evaluation: number) => {

if (evaluation === 0) {
      return "残念！　でもあきらめちゃいけない！　君の夏休みをもう一度！"
  }
  else if (evaluation === 3) {
      return "3点を取るのは逆に難しい！ 開発者が好きな数です！"
  }
  else if (evaluation < 3) {
      return evaluation + "点を取るのは逆に難しい！　もう一度夏休みを復習しよう！"
  }
  else if (evaluation < 10) {
      return evaluation + "点を取るのは逆に難しい！　もう一度夏休みを復習しよう！"
  }
  else if (evaluation < 20) {
      return evaluation + "点!　まだまだいけるさ！　夏休みの思い出をしっかりと振り返ろう！"
  }
  else if (evaluation < 30) {
      return evaluation + "点！　正直コメントしずらいぞう！　来年も夏休みを楽しもう！"
  }
  else if (evaluation < 40) {
      return evaluation + "点！　君ならもっとできる！　夏休みもそう言ってる！"
  }
  else if (evaluation < 50) {
      return evaluation + "点！ 夏休みは終わるけど、人生はこれからさ！"
  }
  else if (evaluation < 60) {
      return evaluation + "点！　twippyで赤点！　夏休みは満点！"
  }
  else if (evaluation < 70) {
      return evaluation + "点！　赤点回避！　きっと、夏休みも喜んでるさ！"
  }
  else if (evaluation < 80) {
      return evaluation + "点！　凄い！　夏休みを十分に満喫しているぞ！"
  }
  else if (evaluation < 90) {
      return evaluation + "点！　素晴らしい！　この辺りが現実的な最高点だ！　おめでとう！"
  }
  else if (evaluation < 100) {
      return evaluation + "点！　もう何も言うことはない！　夏休みなんかメじゃないさ！"
  }
  else if (evaluation >= 100) {
      return evaluation + "点！　ズルはいけない！　でもよくできたね！　最高！"
  }
  else {
      return "error"
  }
}