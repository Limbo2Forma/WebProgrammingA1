const title = "ArchPaladin"

const tiers = [{
    name: "Solo DEF: ",
    rating: "ss"
}, {
    name: "Solo DPS: ",
    rating: "b"
}, {
    name: "Solo AVG: ",
    rating: "a"
}, {
    name: "Farming: ",
    rating: "b"
}, {
    name: "Support: ",
    rating: "a"
}, {
    name: "Group DPS: ",
    rating: "b"
}, {
    name: "Duelling: ",
    rating: "a"
}, {
    name: "Bludrut: ",
    rating: "a"
}];

const overview = {
    enh: "Luck + Spiral Carve",
    mana: "Mage Model",
    abilities: [{
        title: "AA - Auto Attack",
        description: "<p>Mana Cost: 0</p>\
        <p>Cooldown: 2s</p>\
        <p>Type: Physical</p>\
        <p>AoE: 1</p>\
        <p>Weapon Damage: 110%</p>\
        <p>Description: A basic attack. Damage dealt is based on your weapon damage.</p>"
    }, {
        title: "A1 - Commandment",
        description: "<p>Mana Cost: 10</p>\
        <p>Cooldown: 5s</p>\
        <p>Type: Physical / Magical</p>\
        <p>AoE: 3</p>\
        <p>Description: Apples Commandment which reduces your enemy's damage, dodge chance, crit chance, crit damage, and hit chance by 2% and increases the damage they take by 2%. Lasts 100 seconds until reapplied and stacks to 50. Also applies a small DoT which stacks to 5. Deals bonus damage against Undead.</p>"
    }, {
        title: "A2 - Hymn of Light",
        description: "<p>Mana Cost: 40</p>\
        <p>Cooldown: 10s</p>\
        <p>Type: Physical / Magical</p>\
        <p>AoE: 0</p>\
        <p>Description: Heals you and up to 5 allies for a large amount and increases endurance and defence by 20% for 6s.</p>"
    }, {
        title: "A3 - Righteous Seal",
        description: "<p>Mana Cost: 30</p>\
        <p>Cooldown: 15s</p>\
        <p>Type: Physical / Magical</p>\
        <p>AoE: 3</p>\
        <p>Description: Deals moderate damage then reduces your damage by 40% and the damage your enemies do by 70% for 10s.</p>"
    }, {
        title: "A4 - Sacred Magic: Eden",
        description: "<p>Mana Cost: 32</p>\
        <p>Cooldown: 13s</p>\
        <p>Type: Magical</p>\
        <p>AoE: 3</p>\
        <p>Description: Deals damage based on the stacks of DoT from Commandment (up to 5). Consumes all stacks of Commandment and Divine and stops you from reapply them for 8s. Has a 20% chance to stun Undead enemies for 3s.</p>"
    }, {
        title: "R4 Passive 1 - Restitution",
        description: "<p>Reduces incoming damage by 20%.</p>"
    }, {
        title: "R4 Passive 2 - Contemplative",
        description: "<p>Increases your heals by 20%.</p>"
    }, {
        title: "R10 Passive - Righteous Judgement",
        description: "<p>Increases damage by 20%.</p>"
    }]
}

const obtaining = [{
    method: "Non-mem, AC Tagged",
    description: "Join /Darkthronehub and then complete the following quests from Artix:",
    quests: [{
        title: "A Strong Base",
        description: '<ul>\
        <li><strong>Stone Paladin Armour</strong> - Complete the \
        <a href="http://aqwwiki.wikidot.com/light-temple-quests" target="_blank" rel="noopener">quests</a> in /\
        <strong>Temple </strong>+ <strong><a href="http://aqwwiki.wikidot.com/stone-paladin-s-quest" target="_blank" rel="noopener">\
        Stone Paladin\'s quest</a></strong> and then purchase from the Stone Paladin Armour Shop for 35k Gold.</li>\
        <li><strong>Exalted Paladin Seal x1</strong> - Purchase from the Mysterious Dungeon Rep Shop in <strong>/Darkthronehub </strong>\
        for 500k Gold. You\'ll also need Rank 10 <a href="https://aqwg.weebly.com/good.html" target="_blank" rel="noopener">Good</a>.</li>\
        </ul>'
    }, {
        title: "Proof of Valor",
        description: '<ul>\
        <li><strong>Undead Energy x1000</strong> - Defeat enemies in <strong>/Shadowfallwar</strong> or <strong>/Battleunderb</strong>\
        . Firstly, you must complete <strong>Artix\'s </strong><a href="http://aqwwiki.wikidot.com/artix-s-quests#6" target="_blank">\
        quests</a> in /<strong>Necropolis</strong>, up to<strong> "A Loyal Follower"</strong> as it allows Undead Energy to drop.</li>\
        <li><strong>Binky\'s Uni-horn</strong> - Defeat <strong>Binky</strong> in <strong>/Doomvault\
        </strong> You\'ll need a group of friends to help due to the difficulty. Binky can also lock your abilities so try using the \
        least useful one first or a scroll to bait the lock. Be careful of its Prophetic Vision ability as it reflects your damage.\
        </li><li><strong>Desterrat Moya Tentacle x1</strong> - Defeat <strong>Desterrat Moya</strong> in <strong>/Banished</strong>. \
        Complete <strong><a href="http://aqwwiki.wikidot.com/knave1-s-quests" target="_blank">Knave1\'s quests</a></strong> to access \
        it.</li><li><strong>Dreadhaven Helm x1</strong> - Defeat <strong>Dreadhaven General</strong> in <strong>/Dreadhaven</strong>. \
        You must have completed the <strong><a href="http://aqwwiki.wikidot.com/the-story#Chaos" target="_blank">13 Lords of Chaos</a>\
        </strong> storyline to access this boss.</li><li><strong>DoomKitten Claw x1</strong> - Defeat <strong>DoomKitten</strong> in <strong>\
        /Doomkitten</strong>. Be wary of which class you use here as any critical damage you deal is turned into a heal for DoomKitten. \
        You can try&nbsp;using ShadowScythe General, Scarlet Sorceress, Legion DoomKnight, or any other class that can prevent enemy healing \
        for this fight. Alternatively, use a class that deals damage mostly or entirely through DoTs. This would include Blaze Binder, DeathKnight,\
         ShadowStalker of Time, Timeless Dark Caster, or Infinity Knight.</li><li><strong>Vordred\'s Skull x1</strong> - Defeat <strong>Vordred \
         </strong>in /<strong>Vordredboss</strong>.</li></ul>'
    }]
}, {
    method: "Member, AC Tagged",
    description: "As a member, you're able to skip 4 quests. To do so, purchase Paladin from Artix in /Necropolis. You'll need Rank 10 Warrior and Rank 10 Healer (purchase them from /Trainers) and Rank 10 Good. Then get started on Artix's quests in /Darkthronehub:",
    quests: [{
        title: "Legendary Paladin's Vow/Oath/Pledge",
        description: '<ul><li>Just turn in these quests as you accept them. There\'s nothing you need to collect for them.</li></ul>'
    }, {
        title: "Aptitude Test",
        description: '<ul><li><strong>Primarch\'s Hilt x1</strong> - Defeat <strong>Colossal Primarch</strong> in /<strong>Bosschallenge</strong>\
        .He hits very hard so you may want to group up with a StoneCrusher and Void Highlord or something similar\
        .You should collect 3 in total but only if you wish to obtain the <a href="/necrotic-sword-of-doom.html" target="_blank">\
        Necrotic Sword of Doom</a> later.</li><li><strong>Exalted Paladin Seal x1</strong> - Purchase from the Mysterious Dungeon Rep Shop \
        in /<strong>Darkthronehub </strong>for 500k Gold </li><li><strong>Condensed Mana x1</strong> - Defeat <strong>Unending Avatar\
        </strong> in /<strong>Timevoid</strong>.</li></ul>'
    }]
}, {
    method: "2k ACs, AC-Tagged",
    description: "If you're unwilling to farm this class, just purchase it from /Darkthronehub."
}]

const using = [{
    purpose: "Soloing",
    description: '<ul>\
        <li>If you\'re against a hard-hitting boss, start the fight with 4. Try not to use it, though, as it will lower your DPS.</li>\
        <li>After starting, continue to stack 2 and use 3 when you need the HP.</li>\
        <li>Only against low HP enemies should you use 5. Aim to apply five stacks of your DoT before using it.</li>\
        </ul>'
}, {
    purpose: "Support",
    description: '<ul>\
        <li>Use 3 before the fight begins then use 4 and start stacking 2.</li>\
        <li>You should only use this class to support when the enemy hits really hard. Feel free to essentially spam after starting with the above abilities.</li>\
        <li>Don\'t use 5. Just don\'t, unless enemy have less than 15k hp left</li>\
        </ul>'
}]