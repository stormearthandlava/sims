jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Shaman Elemental T20M Beastlord Trinkets'
        },
        xAxis: {
            categories: ["Kil'jaeden's Burning Wish", "Unstable Arcano Crystal", "Tome of Unraveling Sanity", "Spectral Thurible", "Whispers in the Dark", "Stat Stick (Crit)", "Infernal Writ", "Charm of the Rising Tide", "Icon of Rot", "Erratic Metronome", "Dreadstone of Endless Shadows", "Stat Stick (Haste)", "Padawsen's Unlucky Charm", "Star Gate", "Chrono Shard", "Deteriorated Construct Core", "Stat Stick (Versatility)", "Darkmoon Deck: Hellfire", "PVP Badge of Dominance", "Stat Stick (Mastery)", "Horn of Valor", "Stormsinger Fulmination Charge", "Terror From Below", "PVP Insignia of Dominance", "Aran's Relaxing Ruby", "Fury of the Burning Sky", "Eye of Skovald", "Bough of Corruption", "Twisting Wind", "Moonlit Prism", "Unstable Horrorslime", "Elementium Bomb Squirrel Generator", "Devilsaur Shock-Baton", "Infernal Alchemist Stone", "Portable Manacracker", "Obelisk of the Void", "Mrrgria's Favor", "Wriggling Sinew", "Tarnished Sentinel Medallion", "Swarming Plaguehive", "Corrupted Starlight", "Figurehead of the Naglfar", "Caged Horror", "Oakheart's Gnarled Root", "Pharameres Forbidden Grimoire", "Naraxas' Spiked Tongue"]
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
                data: [323232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: '940',
                color: '#00E676',
                data: [0, 9905, 14673, 18310, 17044, 16864, 11103, 15673, 12542, 13250, 14165, 14898, 11150, 12671, 13221, 15810, 15267, 0, 12442, 12838, 13800, 13999, 8994, 11395, 9226, 11174, 8452, 14705, 16501, 9926, 5087, 6585, 8988, 0, 12035, 8503, 2882, 4532, 6356, 5571, 9679, 7595, 6657, 4640, 2532, 2540]
            }, {
                name: '930',
                color: '#db843d',
                data: [0, 6782, 15149, 18992, 11718, 11684, 16449, 11311, 12566, 13261, 12476, 13101, 13021, 17366, 14806, 16194, 12626, 0, 8372, 8604, 9055, 11009, 7318, 8991, 14541, 12249, 9799, 11268, 10945, 6378, 8614, 6996, 3722, 0, 8643, 5519, 5988, 5633, 5678, 5803, 2076, 1695, 3904, 4829, 693, 1540]
            }, {
                name: '920',
                color: '#4198af',
                data: [0, 6837, 19943, 12979, 10715, 15736, 11400, 10824, 11107, 12123, 11262, 8148, 13356, 15745, 8165, 13598, 12285, 0, 12032, 13393, 11033, 6207, 11947, 10287, 7471, 9876, 6506, 15492, 12300, 9060, 3220, 6412, 7978, 0, 11508, 4228, 3909, 4277, 10261, 4136, 7977, 2489, 8289, 3022, 5158, 1212]
            }, {
                name: '910',
                color: '#71588f',
                data: [0, 9388, 9150, 14400, 10357, 7751, 10189, 10653, 9134, 9661, 11845, 13638, 13520, 13109, 11300, 13448, 11425, 0, 10860, 8771, 8162, 12034, 7469, 9432, 9985, 7268, 5775, 10533, 11212, 7151, 6599, 4762, 7228, 0, 7454, 5643, 5420, 4336, 6766, 5997, 6259, 5074, 4650, 6351, 2390, 2285]
            }, {
                name: '900',
                color: '#89a54e',
                data: [0, 9440, 188489, 14346, 10368, 13362, 9966, 13317, 11486, 10068, 8274, 10177, 7106, 11387, 11754, 12681, 9496, 10985, 11224, 10566, 7255, 8723, 6644, 5311, 7876, 8738, 7839, 9349, 8244, 5457, 2113, 7380, 5138, 10927, 7696, 5712, 2950, 4538, 4955, 1748, 3678, 3068, 4068, 1726, 2682, 3305]
            }, {
                name: '890',
                color: '#aa4643',
                data: [0, 7772, 0, 162969, 6875, 12100, 12573, 147532, 8234, 9997, 9991, 8064, 9508, 12767, 7949, 9869, 6721, 9300, 5259, 9299, 6476, 9791, 121931, 9191, 7000, 8710, 4313, 6850, 8436, 6540, 6190, 3949, 5748, 6853, 7404, 6366, 9066, 4827, 84034, 5104, 4807, 0, 2091, 5476, 2346, 1582]
            }, {
                name: '880',
                color: '#4572a7',
                data: [0, 200462, 0, 0, 164983, 150692, 140987, 0, 142188, 133657, 133983, 133929, 131885, 111911, 125354, 110752, 123836, 161044, 115757, 112074, 115207, 105399, 0, 108522, 104828, 102539, 116413, 90541, 89790, 103610, 115952, 104799, 101239, 115668, 76681, 85223, 90808, 91307, 0, 76666, 68283, 82505, 71303, 69485, 59944, 44904]
            }]
    });
});