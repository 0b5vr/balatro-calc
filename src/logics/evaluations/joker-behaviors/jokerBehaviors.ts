import { JokerName } from '../../JokerName';
import { JokerBehavior } from './JokerBehavior';
import { abstractJokerBehavior } from './abstractJokerBehavior';
import { acrobatBehavior } from './acrobatBehavior';
import { ancientJokerBehavior } from './ancientJokerBehavior';
import { arrowheadBehavior } from './arrowheadBehavior';
import { baronBehavior } from './baronBehavior';
import { baseballCardBehavior } from './baseballCardBehavior';
import { blackboardBehavior } from './blackboardBehavior';
import { bloodstoneBehavior } from './bloodstoneBehavior';
import { businessCardBehavior } from './businessCardBehavior';
import { cardSharpBehavior } from './cardSharpBehavior';
import { cavendishBehavior } from './cavendishBehavior';
import { createAddChipsBehavior } from './createAddChipsBehavior';
import { createAddMultBehavior } from './createAddMultBehavior';
import { createContainChipsJokerBehavior } from './createContainChipsJokerBehavior';
import { createContainMultJokerBehavior } from './createContainMultJokerBehavior';
import { createContainMultMultsJokerBehavior } from './createContainMultMultsJokerBehavior';
import { createMultMultsBehavior } from './createMultMultsBehavior';
import { createNopJokerBehavior } from './createNopJokerBehavior';
import { createSuitJokerBehavior } from './createSuitJokerBehavior';
import { driversLicenseBehavior } from './driversLicenseBehavior';
import { duskBehavior } from './duskBehavior';
import { evenStevenBehavior } from './evenStevenBehavior';
import { fibonacciBehavior } from './fibonacciBehavior';
import { flowerPotBehavior } from './flowerPotBehavior';
import { goldenTicketBehavior } from './goldenTicketBehavior';
import { greenJokerBehavior } from './greenJokerBehavior';
import { grosMichelBehavior } from './grosMichelBehavior';
import { hackBehavior } from './hackBehavior';
import { halfJokerBehavior } from './halfJokerBehavior';
import { hangingChadBehavior } from './hangingChadBehavior';
import { hikerBehavior } from './hikerBehavior';
import { jokerStencilBehavior } from './jokerStencilBehavior';
import { loyaltyCardBehavior } from './loyaltyCardBehavior';
import { midasMaskBehavior } from './midasMaskBehavior';
import { mimeBehavior } from './mimeBehavior';
import { misprintBehavior } from './misprintBehavior';
import { mysticSummitBehavior } from './mysticSummitBehavior';
import { obeliskBehavior } from './obeliskBehavior';
import { oddToddBehavior } from './oddToddBehavior';
import { onyxAgateBehavior } from './onyxAgateBehavior';
import { photographBehavior } from './photographBehavior';
import { raisedFistBehavior } from './raisedFistBehavior';
import { reservedParkingBehavior } from './reservedParkingBehavior';
import { rideTheBusBehavior } from './rideTheBusBehavior';
import { roughGemBehavior } from './roughGemBehavior';
import { runnerBehavior } from './runnerBehavior';
import { scaryFaceBehavior } from './scaryFaceBehavior';
import { scholarBehavior } from './scholarBehavior';
import { seanceBehavior } from './seanceBehavior';
import { seeingDoubleBehavior } from './seeingDoubleBehavior';
import { seltzerBehavior } from './seltzerBehavior';
import { shootTheMoonBehavior } from './shootTheMoonBehavior';
import { smileyFaceBehavior } from './smileyFaceBehavior';
import { sockAndBuskinBehavior } from './sockAndBuskinBehavior';
import { spaceJokerBehavior } from './spaceJokerBehavior';
import { squareJokerBehavior } from './squareJokerBehavior';
import { stuntmanBehavior } from './stuntmanBehavior';
import { supernovaBehavior } from './supernovaBehavior';
import { superpositionBehavior } from './superpositionBehavior';
import { theIdolBehavior } from './theIdolBehavior';
import { tribouletBehavior } from './tribouletBehavior';
import { tutorialJokerBehavior } from './tutorialJokerBehavior';
import { vampireBehavior } from './vampireBehavior';
import { walkieTalkieBehavior } from './walkieTalkieBehavior';
import { weeJokerBehavior } from './weeJokerBehavior';
import { yorickBehavior } from './yorickBehavior';

export const jokerBehaviors: Record<JokerName, JokerBehavior> = {
  'Joker': tutorialJokerBehavior,
  'GreedyJoker': createSuitJokerBehavior('Greedy Joker', 'd'),
  'LustyJoker': createSuitJokerBehavior('Lusty Joker', 'h'),
  'WrathfulJoker': createSuitJokerBehavior('Wrathful Joker', 's'),
  'GluttonousJoker': createSuitJokerBehavior('Gluttonous Joker', 'c'),

  'JollyJoker': createContainMultJokerBehavior('Jolly Joker', 'containsPair', 8),
  'ZanyJoker': createContainMultJokerBehavior('Zany Joker', 'containsThreeOfAKind', 12),
  'MadJoker': createContainMultJokerBehavior('Mad Joker', 'containsFourOfAKind', 20),
  'CrazyJoker': createContainMultJokerBehavior('Crazy Joker', 'containsStraight', 12),
  'DrollJoker': createContainMultJokerBehavior('Droll Joker', 'containsFlush', 10),

  'SlyJoker': createContainChipsJokerBehavior('Sly Joker', 'containsPair', 50),
  'WilyJoker': createContainChipsJokerBehavior('Wily Joker', 'containsThreeOfAKind', 100),
  'CleverJoker': createContainChipsJokerBehavior('Clever Joker', 'containsFourOfAKind', 150),
  'DeviousJoker': createContainChipsJokerBehavior('Devious Joker', 'containsStraight', 100),
  'CraftyJoker': createContainChipsJokerBehavior('Crafty Joker', 'containsFlush', 80),

  'HalfJoker': halfJokerBehavior,
  'JokerStencil': jokerStencilBehavior,
  'FourFingers': createNopJokerBehavior('Four Fingers', 'Uncommon'), // implemented in evaluateHand
  'Mime': mimeBehavior,
  'CreditCard': createNopJokerBehavior('Credit Card', 'Common'),

  'CeremonialDagger': createAddMultBehavior('Ceremonial Dagger', 'Uncommon'),
  'Banner': createAddChipsBehavior('Banner', 'Common'),
  'MysticSummit': mysticSummitBehavior,
  'MarbleJoker': createNopJokerBehavior('Marble Joker', 'Uncommon'),
  'LoyaltyCard': loyaltyCardBehavior,

  '8Ball': createNopJokerBehavior('8 Ball', 'Uncommon'),
  'Misprint': misprintBehavior,
  'Dusk': duskBehavior,
  'RaisedFist': raisedFistBehavior,
  'ChaosTheClown': createNopJokerBehavior('Chaos the Clown', 'Common'),

  'Fibonacci': fibonacciBehavior,
  'SteelJoker': createMultMultsBehavior('Steel Joker', 'Uncommon'),
  'ScaryFace': scaryFaceBehavior,
  'AbstractJoker': abstractJokerBehavior,
  'DelayedGratification': createNopJokerBehavior('Delayed Gratification', 'Common'),

  'Hack': hackBehavior,
  'Pareidolia': createNopJokerBehavior('Pareidolia', 'Uncommon'), // implemented in isCardFace
  'GrosMichel': grosMichelBehavior,
  'EvenSteven': evenStevenBehavior,
  'OddTodd': oddToddBehavior,

  'Scholar': scholarBehavior,
  'BusinessCard': businessCardBehavior,
  'Supernova': supernovaBehavior,
  'RideTheBus': rideTheBusBehavior,
  'SpaceJoker': spaceJokerBehavior,

  'Egg': createNopJokerBehavior('Egg', 'Common'),
  'Burglar': createNopJokerBehavior('Burglar', 'Uncommon'),
  'Blackboard': blackboardBehavior,
  'Runner': runnerBehavior,
  'IceCream': createAddChipsBehavior('Ice Cream', 'Common'),

  'DNA': createNopJokerBehavior('DNA', 'Rare'),
  'Splash': createNopJokerBehavior('Splash', 'Common'), // implemented in evaluateHand
  'BlueJoker': createAddChipsBehavior('Blue Joker', 'Common'),
  'SixthSense': createNopJokerBehavior('Sixth Sense', 'Rare'),
  'Constellation': createMultMultsBehavior('Constellation', 'Uncommon'),

  'Hiker': hikerBehavior,
  'FacelessJoker': createNopJokerBehavior('Faceless Joker', 'Common'),
  'GreenJoker': greenJokerBehavior,
  'Superposition': superpositionBehavior,
  'ToDoList': createNopJokerBehavior('To Do List', 'Common'),

  'Cavendish': cavendishBehavior,
  'CardSharp': cardSharpBehavior,
  'RedCard': createAddMultBehavior('Red Card', 'Common'),
  'Madness': createMultMultsBehavior('Madness', 'Uncommon'),
  'SquareJoker': squareJokerBehavior,

  'Seance': seanceBehavior,
  'RiffRaff': createNopJokerBehavior('Riff-raff', 'Common'),
  'Vampire': vampireBehavior,
  'Shortcut': createNopJokerBehavior('Shortcut', 'Uncommon'), // implemented in evaluateHand
  'Hologram': createMultMultsBehavior('Hologram', 'Uncommon'),

  'Vagabond': createNopJokerBehavior('Vagabond', 'Uncommon'),
  'Baron': baronBehavior,
  'Cloud9': createNopJokerBehavior('Cloud 9', 'Uncommon'),
  'Rocket': createNopJokerBehavior('Rocket', 'Uncommon'),
  'Obelisk': obeliskBehavior,

  'MidasMask': midasMaskBehavior,
  'Luchador': createNopJokerBehavior('Luchador', 'Uncommon'),
  'Photograph': photographBehavior,
  'GiftCard': createNopJokerBehavior('Gift Card', 'Uncommon'),
  'TurtleBean': createNopJokerBehavior('Turtle Bean', 'Uncommon'),

  'Erosion': createAddMultBehavior('Erosion', 'Uncommon'),
  'ReservedParking': reservedParkingBehavior,
  'MailInRebate': createNopJokerBehavior('Mail-In Rebate', 'Common'),
  'ToTheMoon': createNopJokerBehavior('To The Moon', 'Uncommon'),
  'Hallucination': createNopJokerBehavior('Hallucination', 'Common'),

  'FortuneTeller': createAddMultBehavior('Fortune Teller', 'Common'),
  'Juggler': createNopJokerBehavior('Juggler', 'Common'),
  'Drunkard': createNopJokerBehavior('Drunkard', 'Common'),
  'StoneJoker': createAddChipsBehavior('Stone Joker', 'Uncommon'),
  'GoldenJoker': createNopJokerBehavior('Golden Joker', 'Common'),

  'LuckyCat': createMultMultsBehavior('Lucky Cat', 'Uncommon'),
  'BaseballCard': baseballCardBehavior,
  'Bull': createAddChipsBehavior('Bull', 'Uncommon'),
  'DietCola': createNopJokerBehavior('Diet Cola', 'Uncommon'),
  'TradingCard': createNopJokerBehavior('Trading Card', 'Uncommon'),

  'FlashCard': createAddMultBehavior('Flash Card', 'Uncommon'),
  'Popcorn': createAddMultBehavior('Popcorn', 'Common'),
  'SpareTrousers': createAddMultBehavior('Spare Trousers', 'Uncommon'),
  'AncientJoker': ancientJokerBehavior,
  'Ramen': createMultMultsBehavior('Ramen', 'Uncommon'),

  'WalkieTalkie': walkieTalkieBehavior,
  'Selzer': seltzerBehavior,
  'Castle': createAddChipsBehavior('Castle', 'Uncommon'),
  'SmileyFace': smileyFaceBehavior,
  'Campfire': createMultMultsBehavior('Campfire', 'Rare'),

  'GoldenTicket': goldenTicketBehavior,
  'MrBones': createNopJokerBehavior('Mr. Bones', 'Uncommon'),
  'Acrobat': acrobatBehavior,
  'SockAndBuskin': sockAndBuskinBehavior,
  'Swashbuckler': createAddMultBehavior('Swashbuckler', 'Common'),

  'Troubadour': createNopJokerBehavior('Troubadour', 'Uncommon'),
  'Certificate': createNopJokerBehavior('Certificate', 'Uncommon'),
  'SmearedJoker': createNopJokerBehavior('Smeared Joker', 'Uncommon'), // implemented in isCardSuit
  'Throwback': createMultMultsBehavior('Throwback', 'Uncommon'),
  'HangingChad': hangingChadBehavior,

  'RoughGem': roughGemBehavior,
  'Bloodstone': bloodstoneBehavior,
  'Arrowhead': arrowheadBehavior,
  'OnyxAgate': onyxAgateBehavior,
  'GlassJoker': createMultMultsBehavior('Glass Joker', 'Uncommon'),

  'Showman': createNopJokerBehavior('Showman', 'Uncommon'),
  'FlowerPot': flowerPotBehavior,
  'Blueprint': createNopJokerBehavior('Blueprint', 'Rare'), // implemented in getJokerBehavior
  'WeeJoker': weeJokerBehavior,
  'MerryAndy': createNopJokerBehavior('Merry Andy', 'Uncommon'),

  'OopsAll6s': createNopJokerBehavior('Oops! All 6s', 'Uncommon'), // implemented in boardProbability
  'TheIdol': theIdolBehavior,
  'SeeingDouble': seeingDoubleBehavior,
  'Matador': createNopJokerBehavior('Matador', 'Uncommon'),
  'HitTheRoad': createMultMultsBehavior('Hit the Road', 'Rare'),

  'TheDuo': createContainMultMultsJokerBehavior('The Duo', 'containsPair', 2),
  'TheTrio': createContainMultMultsJokerBehavior('The Trio', 'containsThreeOfAKind', 3),
  'TheFamily': createContainMultMultsJokerBehavior('The Family', 'containsFourOfAKind', 4),
  'TheOrder': createContainMultMultsJokerBehavior('The Order', 'containsStraight', 3),
  'TheTribe': createContainMultMultsJokerBehavior('The Tribe', 'containsFlush', 2),

  'Stuntman': stuntmanBehavior,
  'InvisibleJoker': createNopJokerBehavior('Invisible Joker', 'Rare'),
  'Brainstorm': createNopJokerBehavior('Brainstorm', 'Rare'), // implemented in getJokerBehavior
  'Satellite': createNopJokerBehavior('Satellite', 'Uncommon'),
  'ShootTheMoon': shootTheMoonBehavior,

  'DriversLicense': driversLicenseBehavior,
  'Cartomancer': createNopJokerBehavior('Cartomancer', 'Uncommon'),
  'Astronomer': createNopJokerBehavior('Astronomer', 'Uncommon'),
  'BurntJoker': createNopJokerBehavior('Burnt Joker', 'Uncommon'),
  'Bootstraps': createAddMultBehavior('Bootstraps', 'Rare'),

  'Canio': createMultMultsBehavior('Canio', 'Legendary'),
  'Triboulet': tribouletBehavior,
  'Yorick': yorickBehavior,
  'Chicot': createNopJokerBehavior('Chicot', 'Legendary'),
  'Perkeo': createNopJokerBehavior('Perkeo', 'Legendary'),
};
