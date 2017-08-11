WowSpec.destroy_all
WowClass.destroy_all
if !!ENV['TEST']
  wow_classes = [
  {
    name: 'Death Knight',
    specs: [
      {
        name: 'Blood',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_deathknight_bloodpresence.jpg'
      },
      {
        name: 'Frost',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_deathknight_frostpresence.jpg'
      },
      {
        name: 'Unholy',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_deathknight_unholypresence.jpg'
      }
    ]
  },
  {
    name: 'Druid',
    specs: [
      {
        name: 'Balance',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_nature_starfall.jpg'
      },
      {
        name: 'Guardian',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_racial_bearform.jpg'
      },
      {
        name: 'Feral',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_druid_catform.jpg'
      },
      {
        name: 'Restoration',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_nature_healingtouch.jpg'
      }
    ]
  },
  {
    name: 'Warrior',
    specs: [
      {
        name: 'Fury',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_warrior_innerrage.jpg'
      },
      {
        name: 'Protection',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_warrior_defensivestance.jpg'
      },
      {
        name: 'Arms',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_warrior_savageblow.jpg'
      }
    ]
  },
  {
    name: 'Hunter',
    specs: [
      {
        name: 'Marksmanship',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_hunter_focusedaim.jpg'
      },
      {
        name: 'Survival',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_hunter_camouflage.jpg'
      },
      {
        name: 'Beast Mastery',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_hunter_bestialdiscipline.jpg'
      }
    ]
  },
  {
    name: 'Priest',
    specs: [
      {
        name: 'Holy',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_guardianspirit.jpg'
      },
      {
        name: 'Discipline',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_powerwordshield.jpg'
      },
      {
        name: 'Shadow',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shadow_shadowwordpain.jpg'
      }
    ]
  },
  {
    name: 'Demon Hunter',
    specs: [
      {
        name: 'Havoc',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_demonhunter_specdps.jpg',
        active: true,
        order: 2
      },
      {
        name: 'Vengence',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_demonhunter_spectank.jpg'
      }
    ]
  },
  {
    name: 'Rogue',
    specs: [
      {
        name: 'Outlaw',
        img_url: 'https://media.blizzard.com/wow/icons/36/inv_sword_30.jpg'
      },
      {
        name: 'Assassination',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_rogue_deadlybrew.jpg'
      },
      {
        name: 'Subtlety',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_stealth.jpg'
      }
    ]
  },
  {
    name: 'Warlock',
    specs: [
      {
        name: 'Affliction',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shadow_deathcoil.jpg'
      },
      {
        name: 'Demonology',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shadow_metamorphosis.jpg'
      },
      {
        name: 'Destruction',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shadow_rainoffire.jpg'
      }
    ]
  },
  {
    name: 'Mage',
    specs: [
      {
        name: 'Frost',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_frost_frostbolt02.jpg'
      },
      {
        name: 'Fire',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_fire_firebolt02.jpg'
      },
      {
        name: 'Arcane',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_magicalsentry.jpg'
      }
    ]
  },
  {
    name: 'Monk',
    specs: [
      {
        name: 'Windwalker',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_monk_windwalker_spec.jpg',
        active: true,
        order: 4
      },
      {
        name: 'Brewmaster',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_monk_brewmaster_spec.jpg'
      },
      {
        name: 'Mistweaver',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_monk_mistweaver_spec.jpg',
        active: true,
        order: 1
      }
    ]
  },
  {
    name: 'Paladin',
    specs: [
      {
        name: 'Retribution',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_auraoflight.jpg'
      },
      {
        name: 'Protection',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_paladin_shieldofthetemplar.jpg'
      },
      {
        name: 'Holy',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_holybolt.jpg',
        active: true,
        order: 3
      }
    ]
  },
  {
    name: 'Shaman',
    specs: [
      {
        name: 'Restoration',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_nature_magicimmunity.jpg'
      },
      {
        name: 'Enhancement',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shaman_improvedstormstrike.jpg'
      },
      {
        name: 'Elemental',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_nature_lightning.jpg'
      }
    ]
  }
]
else
  wow_classes = [
  {
    name: 'Death Knight',
    specs: [
      {
        name: 'Blood',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_deathknight_bloodpresence.jpg'
      },
      {
        name: 'Frost',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_deathknight_frostpresence.jpg'
      },
      {
        name: 'Unholy',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_deathknight_unholypresence.jpg'
      }
    ]
  },
  {
    name: 'Druid',
    specs: [
      {
        name: 'Balance',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_nature_starfall.jpg'
      },
      {
        name: 'Guardian',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_racial_bearform.jpg'
      },
      {
        name: 'Feral',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_druid_catform.jpg'
      },
      {
        name: 'Restoration',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_nature_healingtouch.jpg'
      }
    ]
  },
  {
    name: 'Warrior',
    specs: [
      {
        name: 'Fury',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_warrior_innerrage.jpg'
      },
      {
        name: 'Protection',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_warrior_defensivestance.jpg'
      },
      {
        name: 'Arms',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_warrior_savageblow.jpg'
      }
    ]
  },
  {
    name: 'Hunter',
    specs: [
      {
        name: 'Marksmanship',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_hunter_focusedaim.jpg'
      },
      {
        name: 'Survival',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_hunter_camouflage.jpg'
      },
      {
        name: 'Beast Mastery',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_hunter_bestialdiscipline.jpg'
      }
    ]
  },
  {
    name: 'Priest',
    specs: [
      {
        name: 'Holy',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_guardianspirit.jpg'
      },
      {
        name: 'Discipline',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_powerwordshield.jpg'
      },
      {
        name: 'Shadow',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shadow_shadowwordpain.jpg'
      }
    ]
  },
  {
    name: 'Demon Hunter',
    specs: [
      {
        name: 'Havoc',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_demonhunter_specdps.jpg'
      },
      {
        name: 'Vengence',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_demonhunter_spectank.jpg'
      }
    ]
  },
  {
    name: 'Rogue',
    specs: [
      {
        name: 'Outlaw',
        img_url: 'https://media.blizzard.com/wow/icons/36/inv_sword_30.jpg'
      },
      {
        name: 'Assassination',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_rogue_deadlybrew.jpg'
      },
      {
        name: 'Subtlety',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_stealth.jpg'
      }
    ]
  },
  {
    name: 'Warlock',
    specs: [
      {
        name: 'Affliction',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shadow_deathcoil.jpg'
      },
      {
        name: 'Demonology',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shadow_metamorphosis.jpg'
      },
      {
        name: 'Destruction',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shadow_rainoffire.jpg'
      }
    ]
  },
  {
    name: 'Mage',
    specs: [
      {
        name: 'Frost',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_frost_frostbolt02.jpg'
      },
      {
        name: 'Fire',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_fire_firebolt02.jpg'
      },
      {
        name: 'Arcane',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_magicalsentry.jpg'
      }
    ]
  },
  {
    name: 'Monk',
    specs: [
      {
        name: 'Windwalker',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_monk_windwalker_spec.jpg'
      },
      {
        name: 'Brewmaster',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_monk_brewmaster_spec.jpg'
      },
      {
        name: 'Mistweaver',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_monk_mistweaver_spec.jpg'
      }
    ]
  },
  {
    name: 'Paladin',
    specs: [
      {
        name: 'Retribution',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_auraoflight.jpg'
      },
      {
        name: 'Protection',
        img_url: 'https://media.blizzard.com/wow/icons/36/ability_paladin_shieldofthetemplar.jpg'
      },
      {
        name: 'Holy',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_holy_holybolt.jpg'
      }
    ]
  },
  {
    name: 'Shaman',
    specs: [
      {
        name: 'Restoration',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_nature_magicimmunity.jpg'
      },
      {
        name: 'Enhancement',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_shaman_improvedstormstrike.jpg'
      },
      {
        name: 'Elemental',
        img_url: 'https://media.blizzard.com/wow/icons/36/spell_nature_lightning.jpg'
      }
    ]
  }
]
end

wow_classes.each do |wow_class|
  wc = WowClass.create(name: wow_class[:name])
  wow_class[:specs].each do |spec|
    wc.wow_specs.create(spec)
  end
end
