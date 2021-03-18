gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    player.change(LedSpriteProperty.X, -1)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 3)
let gold = game.createSprite(randint(0, 4), 0)
game.startCountdown(15000)
game.setScore(0)
basic.forever(function () {
    gold.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    if (gold.get(LedSpriteProperty.Y) == 4) {
        gold.delete()
        gold = game.createSprite(randint(0, 4), 0)
    } else if (player.isTouching(gold)) {
        game.setScore(game.score() + 1)
        gold.delete()
        gold = game.createSprite(randint(0, 4), 0)
    }
})
