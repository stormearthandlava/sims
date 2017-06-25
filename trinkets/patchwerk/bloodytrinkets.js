jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Shaman Elemental T20M Patchwerk Trinkets'
        },
        xAxis: {
            categories: ["Kil'jaeden's Burning Wish", "Unstable Arcano Crystal", "Tarnished Sentinel Medallion", "Whispers in the Dark", "Terror From Below", "Stat Stick (Mastery)", "Tome of Unraveling Sanity", "Dreadstone of Endless Shadows", "Stat Stick (Crit)", "PVP Badge of Dominance", "Stat Stick (Versatility)", "Charm of the Rising Tide", "Padawsen's Unlucky Charm", "Infernal Writ", "Stat Stick (Haste)", "Stormsinger Fulmination Charge", "Erratic Metronome", "Chrono Shard", "Horn of Valor", "Naraxas' Spiked Tongue", "PVP Insignia of Dominance", "Star Gate", "Deteriorated Construct Core", "Obelisk of the Void", "Twisting Wind", "Darkmoon Deck: Hellfire", "Bough of Corruption", "Portable Manacracker", "Spectral Thurible", "Fury of the Burning Sky", "Devilsaur Shock-Baton", "Moonlit Prism", "Oakheart's Gnarled Root", "Icon of Rot", "Infernal Alchemist Stone", "Aran's Relaxing Ruby", "Swarming Plaguehive", "Mrrgria's Favor", "Caged Horror", "Corrupted Starlight", "Wriggling Sinew", "Eye of Skovald", "Pharameres Forbidden Grimoire", "Elementium Bomb Squirrel Generator", "Unstable Horrorslime", "Figurehead of the Naglfar"]
        },
        yAxis: {
            min: 0,
            title: {
                text: '\u0394 Damage per second'
            },
            labels: {
                enabled: true
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
                }
            }
        },
        legend: {
            align: 'right',
            x: 0,
            verticalAlign: 'bottom',
            y: 0,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false,
            reversed: true
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b>',
            formatter: function () {
                var s = '<b>' + this.x + '</b>',
                    cumulative_amount = 0;
                $.each(this.points.reverse(), function (i, point) {
                    cumulative_amount += point.y
                    if (point.y !== 0) {
                        s += '<br/>' + point.series.name + ':	' + cumulative_amount;
                    }
                });
                return s;
            },
            shared: true
        },
        plotOptions: {
            series: {
                borderColor: '#151515'

            },
            bar: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [
            {
                name: '970',
                color: '#ffeb3b',
                data: [127753, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '940',
                color: '#00E676',
                data: [0, 4300, 6801, 7279, 7441, 5532, 6188, 4294, 5380, 7830, 6643, 7294, 5996, 6070, 6357, 5057, 5678, 6624, 5397, 5284, 5805, 6561, 6277, 4605, 6840, 0, 6479, 6622, 5399, 5179, 5241, 4676, 3736, 5141, 0, 5037, 5034, 3587, 2989, 2704, 3149, 3169, 2801, 2487, 1485, 538]
            }, {
                name: '930',
                color: '#db843d',
                data: [0, 2440, 6825, 4957, 5220, 7138, 8024, 8257, 5922, 5286, 6117, 6528, 5885, 6026, 7044, 5331, 7072, 4655, 4903, 4252, 3501, 5062, 6637, 3811, 4830, 0, 5503, 4334, 3545, 3727, 3932, 5156, 5026, 2828, 0, 2159, 3707, 2431, 2668, 2766, 1823, 1290, 2507, 2385, 283, 994]
            }, {
                name: '920',
                color: '#4198af',
                data: [0, 5223, 6262, 7123, 6188, 5381, 5375, 4919, 6859, 4920, 5761, 3661, 6286, 4635, 5091, 4916, 4553, 5825, 4095, 5307, 4959, 5604, 4637, 5649, 5875, 0, 5064, 6940, 3768, 3493, 3641, 3822, 2444, 3053, 0, 4021, 3273, 2907, 2841, 1985, 2725, 3110, 3893, 2400, 2088, 2933]
            }, {
                name: '910',
                color: '#71588f',
                data: [0, 3084, 5649, 4620, 5095, 4577, 5426, 5458, 4393, 6053, 5822, 6181, 5303, 5382, 4583, 5930, 5024, 4689, 4639, 2889, 4599, 5296, 5928, 4216, 3394, 0, 4638, 4095, 4765, 3442, 2947, 3282, 3929, 3491, 0, 1744, 3622, 3397, 2217, 2940, 2244, 2156, 2725, 1152, 1578, 1245]
            }, {
                name: '900',
                color: '#89a54e',
                data: [0, 3253, 5625, 4025, 3303, 4937, 66942, 4638, 5166, 3558, 3682, 4437, 3971, 4602, 5995, 3254, 4625, 4993, 4034, 3019, 3140, 4612, 4176, 3600, 5406, 4343, 4735, 4996, 2948, 2808, 3449, 3125, 2872, 3339, 5270, 3463, 2918, 445, 1359, 3401, 2057, 2200, 2416, 3332, 1203, 0]
            }, {
                name: '890',
                color: '#aa4643',
                data: [0, 2482, 71355, 5073, 67969, 3866, 0, 3826, 3681, 4840, 3257, 61030, 4681, 4438, 2820, 4452, 3649, 3951, 3840, 3896, 3995, 4059, 3907, 4017, 4620, 3739, 3209, 3181, 49716, 3405, 2156, 4055, 2652, 2817, 4718, 1768, 2566, 3999, 1945, 253, 1814, 2209, 1043, 143, 1265, 1126]
            }, {
                name: '880',
                color: '#4572a7',
                data: [0, 85445, 0, 67739, 0, 63092, 0, 60011, 59668, 57468, 58261, 0, 56609, 56013, 54782, 57023, 54547, 53008, 50416, 51560, 50074, 43717, 42190, 46795, 40444, 62962, 41296, 40724, 0, 48066, 48417, 43897, 44208, 43752, 53322, 42733, 39741, 38971, 39046, 38591, 36850, 35729, 33810, 35395, 34895, 26066]
            }]
    });
});