const title = "Legion Revenant"

const tiers = [{
    name: "Solo DEF: ",
    rating: "s"
},{
    name: "Solo DPS: ",
    rating: "s"
},{
    name: "Solo AVG: ",
    rating: "s"
},{
    name: "Farming: ",
    rating: "s"
},{
    name: "Support: ",
    rating: "s"
},{
    name: "Group DPS: ",
    rating: "s"
},{
    name: "Duelling: ",
    rating: "a"
},{
    name: "Bludrut: ",
    rating: "a"
}];

const overview = {
    enh: "Wizard + Spiral Carve",
    mana: "Mage Model",
    abilities: [{
        title: "AA - Malevolent Burst",
        description: "<p>Mana Cost: 0</p>\
        <p>Cooldown: 2s</p>\
        <p>Type: Physical</p>\
        <p>AoE: 3</p>\
        <p>Weapon Damage: 50%</p>\
        <p>Description: Deals 100% spell damage to your main target and 66% spell damage to 2 others.</p>"
    },{
        title: "A1 - Atramentous Shade",
        description: "<p>Mana Cost: 25</p>\
        <p>Cooldown: 6s</p>\
        <p>Type: Magical</p>\
        <p>AoE: 3</p>\
        <p>Description: Deals 75% spell damage to primary target and 50% spell damage to two other targets. Applies Consumed to the enemy, decreasing dodge chance by 25% and applying a strong DoT. Also applies Decay to the targets. Guaranteed to hit and crit. All effects last 12 seconds except Decay, which lasts 2 seconds.</p>"
    },{
        title: "A2 - Wicked Purgatory",
        description: "<p>Mana Cost: 30</p>\
        <p>Cooldown: 6s</p>\
        <p>Type: Magical</p>\
        <p>AoE: 1</p>\
        <p>Description: Deals 50% spell damage to your target. Applies Seared and Enveloped. Seared reduces their crit chance by 15% then increases by 3% per extra stack (up to 5). Enveloped decreases your incoming damage by 20% which increases by 4% per extra stack (up to 5). Both effects last 12s.</p>"
    },{
        title: "A3 - Depraved Empowerment",
        description: "<p>Mana Cost: 35</p>\
        <p>Cooldown: 10s</p>\
        <p>Type: Magical</p>\
        <p>AoE: 0</p>\
        <p>Description: Applies Depravity to you and six allies, increasing dodge chance, crit chance, crit damage, outgoing physical damage, and outgoing magical damage by 30%. Also applies Dark Exhortation which increases your haste by 10% and applies a HoT. A mana shield is also applied to you, making you take about 20% less damage but at a cost of 8 mana per hit. All effects last 12s.</p>"
    },{
        title: "A4 - Anathema",
        description: "<p>Mana Cost: 45</p>\
        <p>Cooldown: 12s</p>\
        <p>Type: Magical</p>\
        <p>AoE: 3</p>\
        <p>Description: Deals 305% spell damage to the primary target and 235% spell damage to two secondary targets. Also applies Ars Arcanum, decreasing your mana costs by 50%. Effects last 12s.</p>"
    },{
        title: "R4 Passive 1 - Shadow Step",
        description: "<p>Increases wisdom by 20%.</p>"
    },{
        title: "R4 Passive 2 - Dark Scholar",
        description: "<p>Increases outgoing magic damage by 40%.</p>"
    },{
        title: "R10 Passive - Infinita Nox",
        description: "<p>Increases the damage your enemy takes by 7% for 30s (stacks to 15). This effect has a 50% chance to apply from Atramentous Shade, Wicked Purgatory, and Anathema.</p>"
    }]
}

const obtaining = [{
    method: "Requirement",
    description: "",
    quests: [{
        title: "Rank 10 Evil",
        description: '<a href="/evil.html" target="_blank">Evil Rep Guide</a>'
    },{
        title: "Level 80",
        description: '<a href="/xp--cp.html" target="_blank">XP / CP Guide</a>'
    },{
        title: "Be in the Legion",
        description: '<a href="/joining-the-legion.html" target="_blank">Joining the Legion Guide</a>'
    },{
        title: "Paragon Pet",
        description: 'This is highly recommended but not technically required. This is because of the 40 000 Legion Tokens that you need for "Legion Fealty 3".'
    },{
        title: "Any Dark Caster Class",
        description: 'If you don\'t already have one, purchase Infinite Legion Dark Caster from /Underworld for 2000 Legion Tokens.'
    },{
        title: "Items Required to Explore Tercessuinotlim",
        description: 'To get to the Dark Makai in "Legion Fealty 3", you need:<br><br>\
            <ol><li>Bone Dust x50 - Dropped by Skeleton Warriors in /Battleunderb</li>\
            <li>Escherion\'s Chain - Dropped by Escherion in /Escherion</li>\
            <li>Strand of Vath\'s Hair - Dropped by Vath in /Stalagbite​</li>\
            </ol>Disregard this if you\'re a member as you can farm the Dark Makai in /Nulgath instead.'
    },{
        title: "11+ Inventory Slots",
        description: 'If you don\'t have enough, you\'ll have to buy some for 200 ACs each!'
    }]
},{
    method: "Legion Fealty 1",
    description: "Complete this quest 20 times. It must be accepted for the below items to drop.",
    quests: [{
        title: "Aeacus Empowered x50 - Stacks to 100",
        description: 'Defeat Ultra Aeacus in either /Revenant for a group of 3 or /Judgement for a group of 6. The best classes you can use are:<br>​<br>\
        A:  Corrupted Chronomancer, ShadowStalker of Time, or Immortal Chronomancer (if you apply Temporal Heal early).<br>\
        B:  Void Highlord, LightCaster, or Timeless Dark Caster<br>\
        C:  Legion DoomKnight, Immortal Dark Caster, or Dark Metal Necro (good DPS but risky against Aeacus)'
    },{
        title: "Tethered Soul x300 - Stacks to 500",
        description: 'Defeat Forgotten Souls in /Revenant. The best classes you can use are:<br><br>\
        A: Blaze Binder, Legion BladeMaster Assassin, Scarlet Sorceress, or Vampire Lord (if you encounter HP issues, don\'t use Aspect of the Bat and switch to Wizard enhancements)<br>\
        B: Void Highlord, LightCaster, Abyssal Angel\'s Shadow (use the heal liberally)<br>\
        C: ShadowScythe General, Infinite Legion Dark Caster<br>\
        <br>In a group, mixing together StoneCrusher and Chaos Slayer or Scarlet Sorceress will work very well.'
    },{
        title: "Darkened Essence x500 - Stacks to 600",
        description: 'Defeat enemies in /Shadowrealm.'
    },{
        title: "Dracolich Contract x1000 - Stacks to 1000",
        description: 'Defeat 5 Headed Dracolich in /Necrodungeon. Use BLoD if you have it.<br><br>\
        Directions:<br>​Get to the elevator > Walk right to the next elevator > Enter the right door > Walk right to the next elevator > At the Doom Crawler, walk up into the train > Walk right to the next elevator > Enter the right door > Continue right.'
    },{
        title: "Total",
        description: '<ul>\
        <li>Aeacus Empowered x1000</li>\
        <li>Tethered Soul x6000</li>\
        <li>Darkened Essence x10000</li>\
        <li>Dracolich Contract x20000</li>\
        <li>Total: 37000 kills</li>\
        </ul>'
    }]
},{
    method: "Legion Fealty 2",
    description: 'Complete this quest 6 times. It must be accepted for the items to drop.<br>​<br>​Use BLoD for #1-7, BBoA or NSoD for #8-9, and ADK + BBoA/NSoD or Evolved Dragon Blade for #10.\
    <br><ol>\
    <li>Grim - /Doomvault, select the bottom-centre button on the map and walk left 3 times.</li>\
    <li>Ancient - /Mummies​​</li>\
    <li>Battleon - /Doomwar, select \'Mythsong\' then walk up.</li>\
    <li>Mirror - /Overworld, walk right once.</li>\
    <li>Darkblood - /Deathpits</li>\
    <li>Vampire - /Maxius</li>\
    <li>Doomwood - /Doomwood, walk left, up, left.</li>\
    <li>Spirit - /Curseshore</li>\
    <li>Pirate - /Wrath, walk right 3 times.</li>\
    <li>Dragon - /Dragonbone​</li>\
    </ol><br>\
    Total: 30000 kills (500 kills x 10 maps x 6 times).'
},{
    method: "Legion Fealty 3",
    description: 'Complete this quest 10 times. It does not have to be accepted for you to retrieve the below items.',
    quests: [{
        title: "Hooded Legion Cowl",
        description: 'Purchase this from the Legion Shop from Dage in /Underworld for 500k Gold.'
    },{
        title: "Legion Tokens x4000 - Stacks to 25000",
        description: '<a href="/legion-tokens.html" target="_blank">Legion Tokens Guide</a>'
    },{
        title: "Dage's Favour x300 - Stacks to 5000",
        description: 'Defeat the Dreadfiend of Nulgath and Infernalfiends in Screen 9 of /Underworld (the room as you exit the cave).<br>\
        If you\'d like to obtain Diamonds of Nulgath at the same time, you can accept one of Diligas\' quests and farm in /Evilwarnul. Dage\'s Favours will drop slower in comparison to /Underworld and you need an Unidentified 13 to accept the quests.'
    },{
        title: "Diamond Token of Dage x30 - Stacks to 300",
        description: 'Complete "Legion Loyalty Rewarded" from Gresk in /Shadowblast. To do so, gather:<br>​\
        <ol>\
        <li>Defeated Makai x25 - Dropped by Dark Makai in /Tercessuinotlim (/Nulgath if member)</li>\
        <li>Carnax Eye - Dropped by Carnax in /Aqlesson</li><li>Kathool Tentacle - Dropped by Kathool in /Deepchaos</li>\
        <li>Red Dragon\'s Fang - Dropped by Red Dragon in /Lair (join from /Underlair).</li>\
        <li>Fluffy\'s Bones - Dropped by Fluffy the Dracolich in /Dflesson</li><li>​Blood Titan\'s Blade - Dropped by Blood Titan in /Bloodtitan​</li>\
        </ol>'
    },{
        title: "Dark Token x100 - Stacks to 600",
        description: 'Join /Seraphicwardage and defeat the Seraphic Soldiers. Simply turn in the quests at the top-right whenever available. Use SDKA or ADK if you own them.'
    },{
        title: "Total",
        description: '<ul>\
        <li>5m Gold</li><li>​​Legion Token x40000</li>\
        <li>Dage\'s Favour x3000</li><li>Emblem of Dage x10</li>\
        <li>Diamond Token of Dage x300</li><li>Dark Token x1000</li>\
        </ul>'
    }]
}]

const using = [{
    purpose: "Farming",
    description: '<ul>\
    <li>Before you\'re in combat, use 4 for the buffs.</li>\
    <li>After, start with 5. You will prioritise its use over 2 which you will prioritise over 3.</li>\
    <li>The rotation should turn out like: 452323 (repeat) but it will change, depending on when enemies are respawning.</li>\
    <li>Use 4 when waiting for enemies to respawn or just before you\'ve entered the room.</li>\
    </ul>'
},{
    purpose: "Soloing & Support",
    description: '<ul>\
    <li>This is the exact same as farming. Just repeat 452323.</li>\
    <li>You may need to start with 43 if the enemy is hard-hitting.</li>\
    </ul>'
},{
    purpose: "PvP",
    description: '<ul>\
    <li>Prioritise using 5 over 2 over 3.</li>\
    <li>Against dodge classes like Chrono Assassin, Great Thief, and ShadowStalker of Time, prioritise using 2 to begin as it lowers their dodge chance and it applies an unavoidable attack and DoT.</li>\
    <li>Try to keep 3 stacked by using it on the opponent team\'s Brawlers and Restorers. The added damage resistance buff is essential.</li>\
    <li>Use 4 enough to keep it looped. Try timing it right before you enter a room of enemies. Using it too many times before the fight will ruin your MP.</li>\
    <li>If you find yourself low on mana, play without a PvP amulet and auto-attack the opponent team\'s Brawlers, Restorers, and Captain more often.</li>\
    </ul>'
}]