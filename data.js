var APP_DATA = {
  "scenes": [
    {
      "id": "0-eg-straenseite",
      "name": "EG, Straßenseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": -0.39788876497125436,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.10586958750745268,
          "pitch": 0.029450206498609077,
          "rotation": 0,
          "target": "1-eg-eingangsbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eg-eingangsbereich",
      "name": "EG, Eingangsbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11154930436659427,
        "pitch": -0.016174355499714466,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.423277120366574,
          "pitch": 0.011092369102255972,
          "rotation": 0,
          "target": "0-eg-straenseite"
        },
        {
          "yaw": 0.026878023532898254,
          "pitch": -0.008561151690646085,
          "rotation": 0,
          "target": "2-eg-durchgang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-eg-durchgang",
      "name": "EG, Durchgang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.028177714308761,
          "pitch": 0.020407790434523676,
          "rotation": 0,
          "target": "1-eg-eingangsbereich"
        },
        {
          "yaw": 1.5765910958529021,
          "pitch": -0.029407919090393975,
          "rotation": 0,
          "target": "3-eg-mllraum"
        },
        {
          "yaw": 0.060172536070199456,
          "pitch": 0.0037585030260114394,
          "rotation": 0,
          "target": "4-eg-zugang-straentrakt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-eg-mllraum",
      "name": "EG, Müllraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0751250417162801,
        "pitch": 0.048523066499148726,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.012036710761219,
          "pitch": 0.02564694295263159,
          "rotation": 0,
          "target": "2-eg-durchgang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-eg-zugang-straentrakt",
      "name": "EG, Zugang Straßentrakt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0394289358164253,
          "pitch": 0.0014455562655157905,
          "rotation": 0,
          "target": "2-eg-durchgang"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "7-eg-hof-spielbereich"
        },
        {
          "yaw": 1.4773469283046134,
          "pitch": 0.0000012420769675003385,
          "rotation": 0,
          "target": "5-eg-postksten"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-eg-postksten",
      "name": "EG, Postkästen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5761492167451863,
          "pitch": 0.03016298728325495,
          "rotation": 0,
          "target": "4-eg-zugang-straentrakt"
        },
        {
          "yaw": 1.8195973027887682,
          "pitch": -0.024120506350138626,
          "rotation": 0,
          "target": "6-eg-stgh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-eg-stgh",
      "name": "EG, STGH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.17984479683592625,
        "pitch": -0.016174355499716242,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.5582137802914886,
          "pitch": 0.11919477988199567,
          "rotation": 0,
          "target": "5-eg-postksten"
        },
        {
          "yaw": -0.7953416911281046,
          "pitch": 0.5000817294518196,
          "rotation": 3.141592653589793,
          "target": "9-kg-stgh"
        },
        {
          "yaw": 1.628136084013966,
          "pitch": 0.02547460991205064,
          "rotation": 0,
          "target": "13-eg-t01-vr"
        },
        {
          "yaw": -3.0120085189058035,
          "pitch": 0.009469718887448408,
          "rotation": 0,
          "target": "26-eg-t03-vr"
        },
        {
          "yaw": 2.6677122609409984,
          "pitch": -0.008350942341953882,
          "rotation": 0,
          "target": "21-eg-t02-vr"
        },
        {
          "yaw": -0.02637529966509433,
          "pitch": -0.37302222835832133,
          "rotation": 0,
          "target": "30-1og-stgh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-eg-hof-spielbereich",
      "name": "EG, Hof, Spielbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.15707963267947989,
        "pitch": -0.025878968799545987,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 3.0857444986928924,
          "pitch": 0.05435816369991997,
          "rotation": 0,
          "target": "4-eg-zugang-straentrakt"
        },
        {
          "yaw": -0.011309480985087106,
          "pitch": -0.003255938501885325,
          "rotation": 0,
          "target": "8-eg-hof"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-eg-hof",
      "name": "EG, Hof",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07740155813191762,
        "pitch": 0.0064697421998847204,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -3.079991960767499,
          "pitch": 0.0455533547929825,
          "rotation": 0,
          "target": "7-eg-hof-spielbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kg-stgh",
      "name": "KG, STGH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.20033344457675284,
        "pitch": -0.006469742199902484,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.0974479534620194,
          "pitch": -0.38022287144844213,
          "rotation": 0,
          "target": "6-eg-stgh"
        },
        {
          "yaw": 2.497926427223872,
          "pitch": 0.00022233075143063274,
          "rotation": 0,
          "target": "10-kg-fahrradraum"
        },
        {
          "yaw": 3.0558295375391022,
          "pitch": -0.004058073149250774,
          "rotation": 0,
          "target": "11-kg-einlagerung"
        },
        {
          "yaw": -2.930578312471111,
          "pitch": -0.000925067328076068,
          "rotation": 0,
          "target": "12-kg-kiwa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8719111184858814,
          "pitch": 0.045295771030335885,
          "title": "Lager",
          "text": "<br>"
        },
        {
          "yaw": -1.251956067946729,
          "pitch": 0.03857020355187224,
          "title": "Heizraum",
          "text": "<br>"
        },
        {
          "yaw": -1.6031035984710478,
          "pitch": 0.033727492567949824,
          "title": "E-Raum",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "10-kg-fahrradraum",
      "name": "KG, Fahrradraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1137156242249038,
          "pitch": 0.02588838098160373,
          "rotation": 0,
          "target": "9-kg-stgh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kg-einlagerung",
      "name": "KG, Einlagerung",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.23675770722704215,
        "pitch": -0.01940922659965949,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.010931500888485601,
          "pitch": -0.022586331848053476,
          "rotation": 0,
          "target": "9-kg-stgh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kg-kiwa",
      "name": "KG, KIWA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.07967807454756226,
        "pitch": -0.029113839899489236,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.6614475174804921,
          "pitch": 0.022810143687358675,
          "rotation": 0,
          "target": "9-kg-stgh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-eg-t01-vr",
      "name": "EG, T01, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.04780684472854091,
        "pitch": 0.01617435549971269,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.347105976427292,
          "pitch": 0.028164494318343003,
          "rotation": 0,
          "target": "6-eg-stgh"
        },
        {
          "yaw": 2.2267413841969663,
          "pitch": 0.05681481146687872,
          "rotation": 0,
          "target": "14-eg-t01-ar"
        },
        {
          "yaw": 0.7981940748048721,
          "pitch": -0.0389038563090125,
          "rotation": 0,
          "target": "15-eg-t01-garderobe"
        },
        {
          "yaw": 0.16405355386513065,
          "pitch": -0.03922421720094604,
          "rotation": 0,
          "target": "18-eg-t01-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-eg-t01-ar",
      "name": "EG, T01, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1626079726796927,
          "pitch": 0.011777431534554239,
          "rotation": 0,
          "target": "13-eg-t01-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-eg-t01-garderobe",
      "name": "EG, T01, Garderobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6893413211521064,
          "pitch": -0.0010360153793111948,
          "rotation": 0,
          "target": "13-eg-t01-vr"
        },
        {
          "yaw": 1.4877470272515767,
          "pitch": -0.011833417403495972,
          "rotation": 0,
          "target": "16-eg-t01-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-eg-t01-bad",
      "name": "EG, T01, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8969883179816875,
          "pitch": -0.012925715734454002,
          "rotation": 0,
          "target": "15-eg-t01-garderobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-eg-t01-atelier-1",
      "name": "EG, T01, Atelier 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1821226896997885,
        "pitch": 0.012937528502359186,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.984299545720649,
          "pitch": 0.06535549749296798,
          "rotation": 0,
          "target": "18-eg-t01-essbereich"
        },
        {
          "yaw": 0.10361551721040385,
          "pitch": 0.026863091163065178,
          "rotation": 0,
          "target": "19-eg-t01-atelier-2"
        },
        {
          "yaw": -1.6505457824100986,
          "pitch": 0.05478205808686276,
          "rotation": 0,
          "target": "20-eg-t01-terr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-eg-t01-essbereich",
      "name": "EG, T01, Essbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.067610846046753,
          "pitch": 0.06188742285408644,
          "rotation": 0,
          "target": "13-eg-t01-vr"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "17-eg-t01-atelier-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-eg-t01-atelier-2",
      "name": "EG, T01, Atelier 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.95043520204659,
          "pitch": 0.09261075336844726,
          "rotation": 0,
          "target": "17-eg-t01-atelier-1"
        },
        {
          "yaw": -1.6849834109741586,
          "pitch": 0.047033967441114655,
          "rotation": 0,
          "target": "20-eg-t01-terr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-eg-t01-terr",
      "name": "EG, T01, Terr",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.31498893199287,
          "pitch": -0.026659413833680645,
          "rotation": 0,
          "target": "17-eg-t01-atelier-1"
        },
        {
          "yaw": 0.7639730692339484,
          "pitch": -0.036196200166870085,
          "rotation": 0,
          "target": "19-eg-t01-atelier-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-eg-t02-vr",
      "name": "EG, T02, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.660815854703145,
          "pitch": 0.007491379731735748,
          "rotation": 0,
          "target": "6-eg-stgh"
        },
        {
          "yaw": 1.2087545347751103,
          "pitch": 0.008648071339882435,
          "rotation": 0,
          "target": "23-eg-t02-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-eg-t02-bad",
      "name": "EG, T02, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7032850291408472,
          "pitch": 0.04019690812348564,
          "rotation": 0,
          "target": "23-eg-t02-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-eg-t02-gang",
      "name": "EG, T02, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0819545909632069,
        "pitch": -0.016174355499716242,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.3251272631663653,
          "pitch": 0.027101549909589906,
          "rotation": 0,
          "target": "21-eg-t02-vr"
        },
        {
          "yaw": 1.5497353460852938,
          "pitch": -0.01617435549972157,
          "rotation": 0,
          "target": "22-eg-t02-bad"
        },
        {
          "yaw": 3.0223028905045144,
          "pitch": 0.025527317784145964,
          "rotation": 0,
          "target": "24-eg-t02-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-eg-t02-kochbereich",
      "name": "EG, T02, Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0970987730829176,
          "pitch": -0.011653174321956783,
          "rotation": 0,
          "target": "25-eg-t02-wz"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "23-eg-t02-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-eg-t02-wz",
      "name": "EG, T02, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17515706926602803,
          "pitch": 0.02594822363883509,
          "rotation": 0,
          "target": "24-eg-t02-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-eg-t03-vr",
      "name": "EG, T03, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.04780684472853736,
        "pitch": 0.025878968799545987,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.01396994013468067,
          "pitch": -0.030523606163693984,
          "rotation": 0,
          "target": "6-eg-stgh"
        },
        {
          "yaw": 0.813312640869233,
          "pitch": -0.06317158723362937,
          "rotation": 0,
          "target": "27-eg-t03-bad"
        },
        {
          "yaw": 2.742293071085321,
          "pitch": -0.03748635301114689,
          "rotation": 0,
          "target": "28-eg-t03-kochbereich"
        },
        {
          "yaw": 3.093338040835407,
          "pitch": -0.037299777894739705,
          "rotation": 0,
          "target": "29-eg-t03-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-eg-t03-bad",
      "name": "EG, T03, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1600984236365761,
          "pitch": 0.05737972422362603,
          "rotation": 0,
          "target": "26-eg-t03-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-eg-t03-kochbereich",
      "name": "EG, T03, Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4452821216899991,
          "pitch": 0.02979686116219149,
          "rotation": 0,
          "target": "26-eg-t03-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-eg-t03-wz",
      "name": "EG, T03, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.37323934606838094,
          "pitch": 0.01402346881463501,
          "rotation": 0,
          "target": "26-eg-t03-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-1og-stgh",
      "name": "1OG, STGH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.4530274081231269,
        "pitch": -0.03234871099943781,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.5705319451445199,
          "pitch": 0.4535994658965734,
          "rotation": 3.141592653589793,
          "target": "6-eg-stgh"
        },
        {
          "yaw": 1.347328196334006,
          "pitch": -0.07100940199863359,
          "rotation": 0,
          "target": "31-1og-t04-vr"
        },
        {
          "yaw": 2.3088444918154805,
          "pitch": -0.016459255348641122,
          "rotation": 0,
          "target": "38-1og-t05-vr"
        },
        {
          "yaw": 2.8435268081385505,
          "pitch": 0.0007603715291608637,
          "rotation": 0,
          "target": "46-1og-t06-vr"
        },
        {
          "yaw": -1.5245092593171883,
          "pitch": 0.008065705259239664,
          "rotation": 0,
          "target": "52-1og-t07-wz"
        },
        {
          "yaw": 0.013378753041973113,
          "pitch": -0.35691415329954346,
          "rotation": 0,
          "target": "58-2og-stgh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-1og-t04-vr",
      "name": "1OG, T04, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1138258207822318,
        "pitch": 0.009704613299829745,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.22636554280869,
          "pitch": 0.0010747785836393575,
          "rotation": 0,
          "target": "30-1og-stgh"
        },
        {
          "yaw": 2.357873417389751,
          "pitch": -0.10444924913607778,
          "rotation": 0,
          "target": "32-1og-t04-ar"
        },
        {
          "yaw": 0.8247694883900003,
          "pitch": -0.08181399948608359,
          "rotation": 0,
          "target": "33-1og-t04-garderobe"
        },
        {
          "yaw": 0.1814273336647645,
          "pitch": -0.10254527088261156,
          "rotation": 0,
          "target": "35-1og-t04-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-1og-t04-ar",
      "name": "1OG, T04, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0874196874357516,
          "pitch": -0.009903264663723377,
          "rotation": 0,
          "target": "31-1og-t04-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-1og-t04-garderobe",
      "name": "1OG, T04, Garderobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6157026456464685,
          "pitch": 0.009595143221156732,
          "rotation": 0,
          "target": "31-1og-t04-vr"
        },
        {
          "yaw": 1.5542734800933342,
          "pitch": -0.08105172545737815,
          "rotation": 0,
          "target": "34-1og-t04-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-1og-t04-bad",
      "name": "1OG, T04, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.24131074005834208,
        "pitch": -0.01293948439977477,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.1216780254634262,
          "pitch": 0.0636423008713436,
          "rotation": 0,
          "target": "33-1og-t04-garderobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-1og-t04-wz",
      "name": "1OG, T04, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10016672228836399,
        "pitch": -0.029113839899489236,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.6716372225634402,
          "pitch": -0.026334835990276417,
          "rotation": 0,
          "target": "36-1og-t04-sz"
        },
        {
          "yaw": -1.0779009984456103,
          "pitch": -0.009959452590804219,
          "rotation": 0,
          "target": "37-1og-t04-balkon"
        },
        {
          "yaw": -2.55803420312132,
          "pitch": 0.025092507920378537,
          "rotation": 0,
          "target": "31-1og-t04-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-1og-t04-sz",
      "name": "1OG, T04, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2846047000271525,
          "pitch": 0.015777488141797136,
          "rotation": 0,
          "target": "35-1og-t04-wz"
        },
        {
          "yaw": -1.5071172314938597,
          "pitch": -0.0002177314265274788,
          "rotation": 0,
          "target": "37-1og-t04-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-1og-t04-balkon",
      "name": "1OG, T04, Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2982050447582987,
          "pitch": -0.047250439084116636,
          "rotation": 0,
          "target": "35-1og-t04-wz"
        },
        {
          "yaw": 0.991761802893615,
          "pitch": -0.06389536596708112,
          "rotation": 0,
          "target": "36-1og-t04-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-1og-t05-vr",
      "name": "1OG, T05, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5197931978955328,
          "pitch": -0.005833443860259635,
          "rotation": 0,
          "target": "30-1og-stgh"
        },
        {
          "yaw": -3.0509510761918435,
          "pitch": -0.009635315976668224,
          "rotation": 0,
          "target": "39-1og-t05-bad"
        },
        {
          "yaw": 1.2825290100962903,
          "pitch": 0.04006567691764751,
          "rotation": 0,
          "target": "40-1og-t05-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-1og-t05-bad",
      "name": "1OG, T05, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10244323870401928,
        "pitch": 0.03881845319931898,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.09456406841402298,
          "pitch": 0.023298980911416578,
          "rotation": 0,
          "target": "38-1og-t05-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-1og-t05-gang",
      "name": "1OG, T05, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.04780684472853736,
        "pitch": 0.009704613299829745,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.3328377706867442,
          "pitch": 0.061640430363091525,
          "rotation": 0,
          "target": "38-1og-t05-vr"
        },
        {
          "yaw": 1.5683199353640447,
          "pitch": -0.01539427230362378,
          "rotation": 0,
          "target": "41-1og-t05-ar"
        },
        {
          "yaw": 2.9618275041252247,
          "pitch": 0.017224005962575006,
          "rotation": 0,
          "target": "42-1og-t05-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-1og-t05-ar",
      "name": "1OG, T05, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3500813882937415,
          "pitch": 0.07589728198484025,
          "rotation": 0,
          "target": "40-1og-t05-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-1og-t05-kochbereich",
      "name": "1OG, T05, Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.18212131325157266,
        "pitch": -0.04529040913789473,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.02877159757987613,
          "pitch": -0.04848102353107109,
          "rotation": 0,
          "target": "40-1og-t05-gang"
        },
        {
          "yaw": 3.1146577637413753,
          "pitch": 0.00262898742627371,
          "rotation": 0,
          "target": "43-1og-t05-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-1og-t05-wz",
      "name": "1OG, T05, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.06601897605369444,
        "pitch": -0.012939484399772994,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.3481301251001554,
          "pitch": 0.016495253053383507,
          "rotation": 0,
          "target": "42-1og-t05-kochbereich"
        },
        {
          "yaw": -0.824341191306118,
          "pitch": 0.019384664503931504,
          "rotation": 0,
          "target": "44-1og-t05-sz"
        },
        {
          "yaw": -2.413347033890375,
          "pitch": 0.06010049990945987,
          "rotation": 0,
          "target": "45-1og-t05-loggia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-1og-t05-sz",
      "name": "1OG, T05, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1557022382261444,
          "pitch": -0.0034820888266189343,
          "rotation": 0,
          "target": "43-1og-t05-wz"
        },
        {
          "yaw": 3.1275751177536346,
          "pitch": 0.035583582099359745,
          "rotation": 0,
          "target": "45-1og-t05-loggia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-1og-t05-loggia",
      "name": "1OG, T05, Loggia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10471975511965681,
        "pitch": -0.009721079124814125,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.485481536947506,
          "pitch": -0.032265635419280514,
          "rotation": 0,
          "target": "43-1og-t05-wz"
        },
        {
          "yaw": -0.05518847309554431,
          "pitch": -0.01654859009721754,
          "rotation": 0,
          "target": "44-1og-t05-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-1og-t06-vr",
      "name": "1OG, T06, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.13659098493867816,
        "pitch": -0.02264409769960274,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.08010860695680222,
          "pitch": -0.060183685180733804,
          "rotation": 0,
          "target": "30-1og-stgh"
        },
        {
          "yaw": -1.1699612567896533,
          "pitch": 0.021927988581762037,
          "rotation": 0,
          "target": "47-1og-t06-ar"
        },
        {
          "yaw": 3.0354839741707087,
          "pitch": -0.00946807103025904,
          "rotation": 0,
          "target": "48-1og-t06-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-1og-t06-ar",
      "name": "1OG, T06, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4679559860256184,
          "pitch": -0.037669837313774934,
          "rotation": 0,
          "target": "46-1og-t06-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-1og-t06-wz",
      "name": "1OG, T06, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.002260924264650299,
        "pitch": 0.03881845319931898,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.7154005259629752,
          "pitch": 0.0008912045808511238,
          "rotation": 0,
          "target": "46-1og-t06-vr"
        },
        {
          "yaw": 2.5936671591558564,
          "pitch": 0.009424225144357479,
          "rotation": 0,
          "target": "49-1og-t06-loggia"
        },
        {
          "yaw": -2.446738869680882,
          "pitch": 0.004640380778338837,
          "rotation": 0,
          "target": "50-1og-t06-sz"
        },
        {
          "yaw": -1.265720300865567,
          "pitch": 0.02044222168236942,
          "rotation": 0,
          "target": "51-1og-t06-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-1og-t06-loggia",
      "name": "1OG, T06, Loggia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0569129103911159,
        "pitch": -0.022644097699600962,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.0569129103911159,
          "pitch": -0.022644097699600962,
          "rotation": 0,
          "target": "48-1og-t06-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-1og-t06-sz",
      "name": "1OG, T06, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0830376043910412,
          "pitch": -0.03926857212461243,
          "rotation": 0,
          "target": "48-1og-t06-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-1og-t06-bad",
      "name": "1OG, T06, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1889508624985048,
        "pitch": 0.009704613299831522,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.8808176568404438,
          "pitch": 0.04660302052717569,
          "rotation": 0,
          "target": "48-1og-t06-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-1og-t07-wz",
      "name": "1OG, T07, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.36651914291878285,
        "pitch": -0.022644097699600962,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.5484187116653212,
          "pitch": -0.041774618316162915,
          "rotation": 0,
          "target": "30-1og-stgh"
        },
        {
          "yaw": -2.810847132420008,
          "pitch": 0.042732913481454915,
          "rotation": 0,
          "target": "53-1og-t07-essbereich"
        },
        {
          "yaw": -0.004124961848829045,
          "pitch": -0.01401243660369289,
          "rotation": 0,
          "target": "57-1og-t07-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-1og-t07-essbereich",
      "name": "1OG, T07, Essbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.3642418490266799,
        "pitch": -0.016174355499725124,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.6218473772958077,
          "pitch": 0.06501329790626897,
          "rotation": 0,
          "target": "54-1og-t07-bad"
        },
        {
          "yaw": 0.5123182418988641,
          "pitch": 0.02212093188011721,
          "rotation": 0,
          "target": "52-1og-t07-wz"
        },
        {
          "yaw": -0.5657645430907845,
          "pitch": 0.0388802691194563,
          "rotation": 0,
          "target": "55-1og-t07-ar"
        },
        {
          "yaw": -0.18297073584841783,
          "pitch": 0.03698378876203634,
          "rotation": 0,
          "target": "56-1og-t07-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-1og-t07-bad",
      "name": "1OG, T07, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3937898732174663,
          "pitch": 0.008610579551422859,
          "rotation": 0,
          "target": "53-1og-t07-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-1og-t07-ar",
      "name": "1OG, T07, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.942594650308589,
          "pitch": -0.0033332944959738597,
          "rotation": 0,
          "target": "53-1og-t07-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-1og-t07-sz",
      "name": "1OG, T07, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.15025008343254598,
        "pitch": -0.07116716419875146,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.5783440191634375,
          "pitch": 0.016321816282754753,
          "rotation": 0,
          "target": "53-1og-t07-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-1og-t07-balkon",
      "name": "1OG, T07, Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.11706722843077,
          "pitch": -0.10690362974403378,
          "rotation": 0,
          "target": "52-1og-t07-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-2og-stgh",
      "name": "2OG, STGH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.646956206452888,
          "pitch": 0.31255234518723896,
          "rotation": 3.141592653589793,
          "target": "30-1og-stgh"
        },
        {
          "yaw": 1.5665436498101482,
          "pitch": -0.07248505376039027,
          "rotation": 0,
          "target": "59-2og-t08-vr"
        },
        {
          "yaw": 2.486403430201297,
          "pitch": -0.027528574591112687,
          "rotation": 0,
          "target": "66-2og-t09-vr"
        },
        {
          "yaw": 2.9902195499431468,
          "pitch": 0.024229071410818648,
          "rotation": 0,
          "target": "74-2og-t10-vr"
        },
        {
          "yaw": -1.5479241815859055,
          "pitch": 0.013605322616319526,
          "rotation": 0,
          "target": "80-2og-t11-wz"
        },
        {
          "yaw": 0.10131585201117232,
          "pitch": -0.33523095051670104,
          "rotation": 0,
          "target": "86-3og-stgh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-2og-t08-vr",
      "name": "2OG, T08, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.412114786964361,
          "pitch": -0.058603053626548274,
          "rotation": 0,
          "target": "58-2og-stgh"
        },
        {
          "yaw": 2.0897084120979494,
          "pitch": -0.07127620895177245,
          "rotation": 0,
          "target": "60-2og-t08-ar"
        },
        {
          "yaw": 0.6883152785803759,
          "pitch": -0.0496117081204801,
          "rotation": 0,
          "target": "61-2og-t08-garderobe"
        },
        {
          "yaw": 0.13473078273526973,
          "pitch": -0.07077457495178763,
          "rotation": 0,
          "target": "63-2og-t08-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-2og-t08-ar",
      "name": "2OG, T08, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1119748894964623,
          "pitch": -0.016512349312616692,
          "rotation": 0,
          "target": "59-2og-t08-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-2og-t08-garderobe",
      "name": "2OG, T08, Garderobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6046165201856724,
          "pitch": 0.060348210754309406,
          "rotation": 0,
          "target": "59-2og-t08-vr"
        },
        {
          "yaw": 1.1244442452661492,
          "pitch": 0.08048373724019875,
          "rotation": 0,
          "target": "62-2og-t08-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-2og-t08-bad",
      "name": "2OG, T08, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.2117160266549618,
        "pitch": -0.029113839899489236,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.13719880316701,
          "pitch": -0.012222710801157888,
          "rotation": 0,
          "target": "59-2og-t08-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-2og-t08-wz",
      "name": "2OG, T08, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.03870077906596592,
        "pitch": -0.025878968799545987,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.578602623331637,
          "pitch": -0.04481163868852711,
          "rotation": 0,
          "target": "64-2og-t08-sz"
        },
        {
          "yaw": -1.0214903085904439,
          "pitch": -0.03809387838466449,
          "rotation": 0,
          "target": "65-2og-t08-balkon"
        },
        {
          "yaw": -2.5407698452151877,
          "pitch": 0.012348819989243864,
          "rotation": 0,
          "target": "59-2og-t08-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-2og-t08-sz",
      "name": "2OG, T08, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3000147266451663,
          "pitch": -0.045142418455981215,
          "rotation": 0,
          "target": "63-2og-t08-wz"
        },
        {
          "yaw": -1.4971108828375357,
          "pitch": -0.052138422162745,
          "rotation": 0,
          "target": "65-2og-t08-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-2og-t08-balkon",
      "name": "2OG, T08, Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11610233719787644,
        "pitch": 0.05822767979897847,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.2494393056495525,
          "pitch": -0.08417598484981603,
          "rotation": 0,
          "target": "63-2og-t08-wz"
        },
        {
          "yaw": 0.9555755498289891,
          "pitch": -0.005596953223184542,
          "rotation": 0,
          "target": "64-2og-t08-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-2og-t09-vr",
      "name": "2OG, T09, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.483068130122394,
          "pitch": -0.01958715088165519,
          "rotation": 6.283185307179586,
          "target": "58-2og-stgh"
        },
        {
          "yaw": -3.0737893133077225,
          "pitch": 0.018984051386592427,
          "rotation": 0,
          "target": "67-2og-t09-bad"
        },
        {
          "yaw": 1.3531239763517178,
          "pitch": -0.01522470865683978,
          "rotation": 0,
          "target": "68-2og-t09-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-2og-t09-bad",
      "name": "2OG, T09, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.07284768031793298,
        "pitch": 0.03558358209937573,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.07284768031793298,
          "pitch": 0.03558358209937573,
          "rotation": 0,
          "target": "66-2og-t09-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-2og-t09-gang",
      "name": "2OG, T09, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3610782460750972,
          "pitch": 0.060037325249854945,
          "rotation": 0,
          "target": "66-2og-t09-vr"
        },
        {
          "yaw": 1.4728536079349404,
          "pitch": -0.03401496619222044,
          "rotation": 0,
          "target": "69-2og-t09-ar"
        },
        {
          "yaw": 2.891521623431209,
          "pitch": 0.00043168199199961066,
          "rotation": 0,
          "target": "70-2og-t09-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-2og-t09-ar",
      "name": "2OG, T09, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3005904881445574,
          "pitch": 0.03175474638252318,
          "rotation": 0,
          "target": "68-2og-t09-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "70-2og-t09-kochbereich",
      "name": "2OG, T09, Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.008251164421096746,
          "pitch": -0.0283085966744423,
          "rotation": 0,
          "target": "68-2og-t09-gang"
        },
        {
          "yaw": 2.9706873358843353,
          "pitch": -0.002145462830370093,
          "rotation": 0,
          "target": "71-2og-t09-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "71-2og-t09-wz",
      "name": "2OG, T09, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21141677589543306,
          "pitch": 3.623359390303449e-9,
          "rotation": 0,
          "target": "70-2og-t09-kochbereich"
        },
        {
          "yaw": -2.269329999303814,
          "pitch": 0.04957840403306335,
          "rotation": 0,
          "target": "73-2og-t09-loggia"
        },
        {
          "yaw": -0.6793858591885353,
          "pitch": 0.013804191300256008,
          "rotation": 0,
          "target": "72-2og-t09-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "72-2og-t09-sz",
      "name": "2OG, T09, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2369542121096107,
          "pitch": 0.004318522790619284,
          "rotation": 0,
          "target": "71-2og-t09-wz"
        },
        {
          "yaw": -3.0109749618997803,
          "pitch": 0.05153481191231357,
          "rotation": 0,
          "target": "73-2og-t09-loggia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-2og-t09-loggia",
      "name": "2OG, T09, Loggia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.016904012374165944,
          "pitch": 0.0032337482462772016,
          "rotation": 0,
          "target": "72-2og-t09-sz"
        },
        {
          "yaw": 1.778889554584497,
          "pitch": -0.0390451563517189,
          "rotation": 0,
          "target": "71-2og-t09-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-2og-t10-vr",
      "name": "2OG, T10, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1252096981708526,
        "pitch": -0.022639402373993534,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.04997462044651613,
          "pitch": -0.052603945177668976,
          "rotation": 0,
          "target": "58-2og-stgh"
        },
        {
          "yaw": -1.2597263077543062,
          "pitch": 0.04090131079619752,
          "rotation": 0,
          "target": "75-2og-t10-ar"
        },
        {
          "yaw": 2.945117995606955,
          "pitch": -0.006247754269548267,
          "rotation": 0,
          "target": "76-2og-t10-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-2og-t10-ar",
      "name": "2OG, T10, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4394476494933413,
          "pitch": 0.010217537965225176,
          "rotation": 0,
          "target": "74-2og-t10-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "76-2og-t10-wz",
      "name": "2OG, T10, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8062757756165873,
          "pitch": -0.01684027565764623,
          "rotation": 0,
          "target": "74-2og-t10-vr"
        },
        {
          "yaw": 2.5034827583683636,
          "pitch": -0.04422330171718514,
          "rotation": 0,
          "target": "77-2og-t10-loggia"
        },
        {
          "yaw": -2.47175612838984,
          "pitch": -0.004791283162056459,
          "rotation": 0,
          "target": "78-2og-t10-sz"
        },
        {
          "yaw": -1.16329629031004,
          "pitch": 0.0064748549850506265,
          "rotation": 0,
          "target": "79-2og-t10-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "77-2og-t10-loggia",
      "name": "2OG, T10, Loggia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.27090545346172235,
        "pitch": -0.029113839899491012,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.5359464078372778,
          "pitch": -0.053532057391366905,
          "rotation": 0,
          "target": "76-2og-t10-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "78-2og-t10-sz",
      "name": "2OG, T10, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0650317508733806,
          "pitch": 0.001838676732937472,
          "rotation": 0,
          "target": "76-2og-t10-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "79-2og-t10-bad",
      "name": "2OG, T10, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8960886663639505,
          "pitch": -0.05312487197497795,
          "rotation": 0,
          "target": "76-2og-t10-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "80-2og-t11-wz",
      "name": "2OG, T11, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6042446960035077,
          "pitch": -0.06443571785579039,
          "rotation": 0,
          "target": "58-2og-stgh"
        },
        {
          "yaw": -0.045153222891151756,
          "pitch": 0.003761473297657858,
          "rotation": 0,
          "target": "85-2og-t11-balkon"
        },
        {
          "yaw": -2.750371777413129,
          "pitch": 0.02730874364745972,
          "rotation": 0,
          "target": "81-2og-t11-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "81-2og-t11-essbereich",
      "name": "2OG, T11, Essbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45216490690027555,
          "pitch": 0.016933044740039094,
          "rotation": 0,
          "target": "80-2og-t11-wz"
        },
        {
          "yaw": -1.557474277717267,
          "pitch": 0.013099103866622386,
          "rotation": 0,
          "target": "82-2og-t11-bad"
        },
        {
          "yaw": -0.6076865564896714,
          "pitch": 0.018620169795980246,
          "rotation": 0,
          "target": "83-2og-t11-ar"
        },
        {
          "yaw": -0.25418821116351964,
          "pitch": 0.010932581682830289,
          "rotation": 0,
          "target": "84-2og-t11-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "82-2og-t11-bad",
      "name": "2OG, T11, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5560615011884362,
          "pitch": -0.027279927476627108,
          "rotation": 0,
          "target": "81-2og-t11-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "83-2og-t11-ar",
      "name": "2OG, T11, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7689333951778696,
          "pitch": -0.07540319152577624,
          "rotation": 0,
          "target": "81-2og-t11-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "84-2og-t11-sz",
      "name": "2OG, T11, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.622945939461835,
          "pitch": 0.00021626303113464473,
          "rotation": 0,
          "target": "81-2og-t11-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "85-2og-t11-balkon",
      "name": "2OG, T11, Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.107423075898966,
          "pitch": -0.028649929141414177,
          "rotation": 0,
          "target": "80-2og-t11-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "86-3og-stgh",
      "name": "3OG, STGH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7973387199454436,
          "pitch": 0.2792344455119995,
          "rotation": 3.141592653589793,
          "target": "58-2og-stgh"
        },
        {
          "yaw": 1.6322879470238645,
          "pitch": -0.018075762740478396,
          "rotation": 0,
          "target": "87-3og-t12-vr"
        },
        {
          "yaw": 2.5818310398887183,
          "pitch": -0.01757201482802806,
          "rotation": 0,
          "target": "94-3og-t13-vr"
        },
        {
          "yaw": 3.035741985581339,
          "pitch": 0.005314615895859021,
          "rotation": 0,
          "target": "102-3og-t14-vr"
        },
        {
          "yaw": -1.6005579327894957,
          "pitch": 0.03813543980369083,
          "rotation": 0,
          "target": "108-3og-t15-wz"
        },
        {
          "yaw": 0.03011358398665287,
          "pitch": -0.353355036811859,
          "rotation": 6.283185307179586,
          "target": "114-1dg-stgh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "87-3og-t12-vr",
      "name": "3OG, T12, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1656485852452576,
          "pitch": -0.013817695570056188,
          "rotation": 0,
          "target": "86-3og-stgh"
        },
        {
          "yaw": 2.2332960023783563,
          "pitch": -0.04815193846317278,
          "rotation": 0,
          "target": "88-3og-t12-ar"
        },
        {
          "yaw": 0.7079974829701996,
          "pitch": -0.0906076401614122,
          "rotation": 0,
          "target": "89-3og-t12-garderobe"
        },
        {
          "yaw": 0.11248315656053087,
          "pitch": -0.09697479104758244,
          "rotation": 0,
          "target": "91-3og-t12-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "88-3og-t12-ar",
      "name": "3OG, T12, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1733541080327718,
          "pitch": -0.019688684814072488,
          "rotation": 0,
          "target": "87-3og-t12-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "89-3og-t12-garderobe",
      "name": "3OG, T12, Garderobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.560688459650546,
          "pitch": -0.004537065937284979,
          "rotation": 0,
          "target": "87-3og-t12-vr"
        },
        {
          "yaw": 1.3721979876608241,
          "pitch": -0.08112050555831374,
          "rotation": 0,
          "target": "90-3og-t12-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "90-3og-t12-bad",
      "name": "3OG, T12, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.031871229819024904,
        "pitch": -0.025878968799545987,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.0276731796514245,
          "pitch": -0.004338474728198705,
          "rotation": 0,
          "target": "89-3og-t12-garderobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "91-3og-t12-wz",
      "name": "3OG, T12, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6154709028814533,
          "pitch": 0.0167394071977931,
          "rotation": 0,
          "target": "87-3og-t12-vr"
        },
        {
          "yaw": -1.0994140244983583,
          "pitch": 0.02219673539438638,
          "rotation": 0,
          "target": "93-3og-t12-balkon"
        },
        {
          "yaw": -0.5935459186781262,
          "pitch": 0.015528067859792216,
          "rotation": 0,
          "target": "92-3og-t12-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "92-3og-t12-sz",
      "name": "3OG, T12, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.340367561635656,
          "pitch": 0.009181349161114127,
          "rotation": 0,
          "target": "91-3og-t12-wz"
        },
        {
          "yaw": -1.5144383836297024,
          "pitch": -0.004667119738067882,
          "rotation": 0,
          "target": "93-3og-t12-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "93-3og-t12-balkon",
      "name": "3OG, T12, Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.866738333209927,
          "pitch": -0.0714213284130647,
          "rotation": 0,
          "target": "92-3og-t12-sz"
        },
        {
          "yaw": 2.0620317060868913,
          "pitch": -0.08561524701147505,
          "rotation": 0,
          "target": "91-3og-t12-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "94-3og-t13-vr",
      "name": "3OG, T13, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5919364093226065,
          "pitch": -0.01798234844847002,
          "rotation": 0,
          "target": "86-3og-stgh"
        },
        {
          "yaw": 3.0672953924235014,
          "pitch": -0.030729918446002813,
          "rotation": 0,
          "target": "95-3og-t13-bad"
        },
        {
          "yaw": 1.1881745724940025,
          "pitch": 0.018823952075523565,
          "rotation": 0,
          "target": "96-3og-t13-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "95-3og-t13-bad",
      "name": "3OG, T13, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.18895068989031927,
        "pitch": 0,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.02843430151344606,
          "pitch": -0.0185824864626003,
          "rotation": 0,
          "target": "94-3og-t13-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "96-3og-t13-gang",
      "name": "3OG, T13, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3507459788415748,
          "pitch": 0.03710643652916801,
          "rotation": 0,
          "target": "94-3og-t13-vr"
        },
        {
          "yaw": 1.6030883341970004,
          "pitch": -0.08303180072963912,
          "rotation": 0,
          "target": "97-3og-t13-ar"
        },
        {
          "yaw": 2.9111419039980344,
          "pitch": -0.0013476288461280461,
          "rotation": 0,
          "target": "98-3og-t13-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "97-3og-t13-ar",
      "name": "3OG, T13, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.252549278375719,
          "pitch": 0.014728450005414118,
          "rotation": 0,
          "target": "96-3og-t13-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "98-3og-t13-kochbereich",
      "name": "3OG, T13, Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.060172536070199456,
          "pitch": 2.595879067257556e-9,
          "rotation": 0,
          "target": "96-3og-t13-gang"
        },
        {
          "yaw": 2.891172956874292,
          "pitch": -0.01600263273266478,
          "rotation": 0,
          "target": "99-3og-t13-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "99-3og-t13-wz",
      "name": "3OG, T13, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3584594296216146,
          "pitch": 0.03218646625699151,
          "rotation": 0,
          "target": "98-3og-t13-kochbereich"
        },
        {
          "yaw": -0.8307479010992971,
          "pitch": 0.027964332068574294,
          "rotation": 0,
          "target": "100-3og-t13-sz"
        },
        {
          "yaw": -2.387193018216035,
          "pitch": 0.014383377268833542,
          "rotation": 0,
          "target": "101-3og-t13-loggia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "100-3og-t13-sz",
      "name": "3OG, T13, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.086970961592435,
          "pitch": 0.004129361075097648,
          "rotation": 0,
          "target": "101-3og-t13-loggia"
        },
        {
          "yaw": 1.120013042592987,
          "pitch": -0.02634757040839375,
          "rotation": 0,
          "target": "99-3og-t13-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "101-3og-t13-loggia",
      "name": "3OG, T13, Loggia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7173763689446133,
          "pitch": -0.012456575237692391,
          "rotation": 0,
          "target": "99-3og-t13-wz"
        },
        {
          "yaw": 0.020007318662470297,
          "pitch": -0.009097547023868557,
          "rotation": 0,
          "target": "100-3og-t13-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "102-3og-t14-vr",
      "name": "3OG, T14, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.015060182038338255,
          "pitch": -0.06016572881681981,
          "rotation": 0,
          "target": "86-3og-stgh"
        },
        {
          "yaw": -1.2524568484042522,
          "pitch": -0.008332069562342781,
          "rotation": 0,
          "target": "103-3og-t14-ar"
        },
        {
          "yaw": 2.8397226400527202,
          "pitch": -0.007587159284419442,
          "rotation": 0,
          "target": "104-3og-t14-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "103-3og-t14-ar",
      "name": "3OG, T14, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6288350718742715,
          "pitch": -0.05440996424609068,
          "rotation": 0,
          "target": "102-3og-t14-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "104-3og-t14-wz",
      "name": "3OG, T14, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1252084028604621,
        "pitch": -1.7763568394002505e-15,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.9298418102883392,
          "pitch": -0.02610192500338826,
          "rotation": 0,
          "target": "102-3og-t14-vr"
        },
        {
          "yaw": 2.452923969074906,
          "pitch": -0.03635996973883948,
          "rotation": 0,
          "target": "105-3og-t14-loggia"
        },
        {
          "yaw": -2.5185255843090673,
          "pitch": 0.03845273111417491,
          "rotation": 0,
          "target": "106-3og-t14-sz"
        },
        {
          "yaw": -1.1292303084230788,
          "pitch": 0.004151771771681467,
          "rotation": 0,
          "target": "107-3og-t14-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "105-3og-t14-loggia",
      "name": "3OG, T14, Loggia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5486404561703715,
        "pitch": 0.016174355499716242,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.6499625939811864,
          "pitch": 0.01234542255469151,
          "rotation": 0,
          "target": "104-3og-t14-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "106-3og-t14-sz",
      "name": "3OG, T14, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.031696461337324,
          "pitch": -0.022179101198677387,
          "rotation": 0,
          "target": "104-3og-t14-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "107-3og-t14-bad",
      "name": "3OG, T14, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9282094040511222,
          "pitch": 0.0868793952556075,
          "rotation": 0,
          "target": "104-3og-t14-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "108-3og-t15-wz",
      "name": "3OG, T15, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.594149592016354,
          "pitch": -0.06319118850257865,
          "rotation": 0,
          "target": "86-3og-stgh"
        },
        {
          "yaw": 0.046143521044250235,
          "pitch": 0.0005303457379461918,
          "rotation": 0,
          "target": "113-3og-t15-balkon"
        },
        {
          "yaw": -2.7904246485284876,
          "pitch": 0.07902700471369428,
          "rotation": 0,
          "target": "109-3og-t15-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "109-3og-t15-kochbereich",
      "name": "3OG, T15, Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3797518733874998,
          "pitch": 0.020979419881300032,
          "rotation": 0,
          "target": "108-3og-t15-wz"
        },
        {
          "yaw": -1.5992725762899909,
          "pitch": 0.015799035196529587,
          "rotation": 0,
          "target": "110-3og-t15-bad"
        },
        {
          "yaw": -0.6866396170865023,
          "pitch": 0.030224586886236082,
          "rotation": 0,
          "target": "111-3og-t15-ar"
        },
        {
          "yaw": -0.36669304195268104,
          "pitch": 0.021086897940950422,
          "rotation": 0,
          "target": "112-3og-t15-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "110-3og-t15-bad",
      "name": "3OG, T15, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5169300811113464,
          "pitch": 0.03442483282810649,
          "rotation": 0,
          "target": "109-3og-t15-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "111-3og-t15-ar",
      "name": "3OG, T15, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7675184375385138,
          "pitch": 0.0000282623667402504,
          "rotation": 0,
          "target": "109-3og-t15-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "112-3og-t15-sz",
      "name": "3OG, T15, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.593893495500284,
          "pitch": 0.004783835811110748,
          "rotation": 0,
          "target": "109-3og-t15-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "113-3og-t15-balkon",
      "name": "3OG, T15, Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1235091433435382,
          "pitch": 0.028652613264394944,
          "rotation": 0,
          "target": "108-3og-t15-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "114-1dg-stgh",
      "name": "1DG, STGH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9161420198049601,
          "pitch": 0.2620711958154409,
          "rotation": 3.141592653589793,
          "target": "86-3og-stgh"
        },
        {
          "yaw": 2.6649783840328016,
          "pitch": -0.04893235039914323,
          "rotation": 0,
          "target": "115-1dg-t16-vr"
        },
        {
          "yaw": -3.121675276405604,
          "pitch": -0.006081362974423854,
          "rotation": 0,
          "target": "126-1dg-t17-wz"
        },
        {
          "yaw": -1.6913849613682093,
          "pitch": 0.023846282014387654,
          "rotation": 0,
          "target": "131-1dg-t18-wz"
        },
        {
          "yaw": -0.07890778836597079,
          "pitch": -0.33251078807092505,
          "rotation": 0,
          "target": "137-2dg-stgh-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "115-1dg-t16-vr",
      "name": "1DG, T16, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5656892427512652,
          "pitch": 0.013987913248030281,
          "rotation": 0,
          "target": "114-1dg-stgh"
        },
        {
          "yaw": 0.01574154485120971,
          "pitch": -0.04597263630708426,
          "rotation": 0,
          "target": "116-1dg-t16-wz"
        },
        {
          "yaw": 2.820902629468814,
          "pitch": 0.007041626648462085,
          "rotation": 0,
          "target": "118-1dg-t16-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "116-1dg-t16-wz",
      "name": "1DG, T16, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06392408481233147,
          "pitch": -0.026297453602989407,
          "rotation": 0,
          "target": "117-1dg-t16-terr-hofseitig"
        },
        {
          "yaw": -2.8563780949969484,
          "pitch": 0.039699769396003504,
          "rotation": 0,
          "target": "115-1dg-t16-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "117-1dg-t16-terr-hofseitig",
      "name": "1DG, T16, Terr. hofseitig",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0925798021442485,
          "pitch": 0.03525558754189717,
          "rotation": 0,
          "target": "116-1dg-t16-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "118-1dg-t16-gang",
      "name": "1DG, T16, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6513032490814687,
          "pitch": 0.009851582870087583,
          "rotation": 0,
          "target": "115-1dg-t16-vr"
        },
        {
          "yaw": 0.6351530507560312,
          "pitch": -0.042201806663102914,
          "rotation": 0,
          "target": "119-1dg-t16-wc"
        },
        {
          "yaw": 1.6186414765759354,
          "pitch": -0.0451202223219056,
          "rotation": 0,
          "target": "120-1dg-t16-bad"
        },
        {
          "yaw": 2.548132282129088,
          "pitch": -0.007689667536006084,
          "rotation": 0,
          "target": "122-1dg-t16-sz-1"
        },
        {
          "yaw": -2.3861292897855293,
          "pitch": 0.01206212569840126,
          "rotation": 0,
          "target": "123-1dg-t16-sz-2"
        },
        {
          "yaw": -1.4499457821454005,
          "pitch": 0.02308245168677736,
          "rotation": 0,
          "target": "125-1dg-t16-ar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "119-1dg-t16-wc",
      "name": "1DG, T16, WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8592717545104627,
          "pitch": -0.002057375284714169,
          "rotation": 0,
          "target": "118-1dg-t16-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "120-1dg-t16-bad",
      "name": "1DG, T16, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15990572704697392,
          "pitch": -0.030582967217728907,
          "rotation": 0,
          "target": "121-1dg-t16-dusche"
        },
        {
          "yaw": -1.9829783185731884,
          "pitch": 0.036389752065115744,
          "rotation": 0,
          "target": "118-1dg-t16-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "121-1dg-t16-dusche",
      "name": "1DG, T16, Dusche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8635497978131363,
          "pitch": -0.0061231827469789835,
          "rotation": 0,
          "target": "120-1dg-t16-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "122-1dg-t16-sz-1",
      "name": "1DG, T16, SZ 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.19350389532981183,
        "pitch": -0.0000014489856745569796,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.32453508974790246,
          "pitch": 0.014929656406650338,
          "rotation": 0,
          "target": "118-1dg-t16-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "123-1dg-t16-sz-2",
      "name": "1DG, T16, SZ 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.27090545346172235,
        "pitch": 0.006469742199886497,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.27090545346172235,
          "pitch": 0.006469742199886497,
          "rotation": 0,
          "target": "118-1dg-t16-gang"
        },
        {
          "yaw": -3.0653443593247687,
          "pitch": 0.023876739303691608,
          "rotation": 0,
          "target": "124-1dg-t16-terr-straenseitig"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "124-1dg-t16-terr-straenseitig",
      "name": "1DG, T16, Terr. straßenseitig",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04780684706318716,
          "pitch": 0.040409340168810814,
          "rotation": 0,
          "target": "123-1dg-t16-sz-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "125-1dg-t16-ar",
      "name": "1DG, T16, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7889133770225065,
          "pitch": 0.04683518348278781,
          "rotation": 0,
          "target": "118-1dg-t16-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "126-1dg-t17-wz",
      "name": "1DG, T17, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0642638621894918,
        "pitch": 0.059682809511496515,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.831646039043161,
          "pitch": 0.005206651461165279,
          "rotation": 0,
          "target": "114-1dg-stgh"
        },
        {
          "yaw": -0.02142677725125708,
          "pitch": -0.016547772024468443,
          "rotation": 0,
          "target": "127-1dg-t17-terr"
        },
        {
          "yaw": 1.5268268294848735,
          "pitch": -0.02699034076002782,
          "rotation": 0,
          "target": "128-1dg-t17-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "127-1dg-t17-terr",
      "name": "1DG, T17, Terr",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.030296655094661062,
          "pitch": -0.015063273571344737,
          "rotation": 0,
          "target": "126-1dg-t17-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "128-1dg-t17-gang",
      "name": "1DG, T17, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5712159124368341,
          "pitch": 0.0516523915700251,
          "rotation": 0,
          "target": "126-1dg-t17-wz"
        },
        {
          "yaw": 0.16386906954263125,
          "pitch": -0.04231498593308913,
          "rotation": 0,
          "target": "129-1dg-t17-sz"
        },
        {
          "yaw": 1.6902278200556982,
          "pitch": -0.03298008690701337,
          "rotation": 0,
          "target": "130-1dg-t17-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "129-1dg-t17-sz",
      "name": "1DG, T17, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2662918436671333,
          "pitch": 0.08899414026168806,
          "rotation": 0,
          "target": "128-1dg-t17-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "130-1dg-t17-bad",
      "name": "1DG, T17, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3782035401612465,
          "pitch": 0.05813253115068484,
          "rotation": 0,
          "target": "128-1dg-t17-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "131-1dg-t18-wz",
      "name": "1DG, T18, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6268640338205973,
          "pitch": -0.047127024971921117,
          "rotation": 0,
          "target": "114-1dg-stgh"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "136-1dg-t18-balkon"
        },
        {
          "yaw": -2.8326200759267266,
          "pitch": 0.08396667093942156,
          "rotation": 0,
          "target": "132-1dg-t18-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "132-1dg-t18-essbereich",
      "name": "1DG, T18, Essbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.35599291193437566,
          "pitch": 0.0028973356955326324,
          "rotation": 0,
          "target": "131-1dg-t18-wz"
        },
        {
          "yaw": -1.5528601003328468,
          "pitch": 0.015114332339251746,
          "rotation": 0,
          "target": "133-1dg-t18-bad"
        },
        {
          "yaw": -0.656646974511732,
          "pitch": -0.0013577159106823444,
          "rotation": 0,
          "target": "134-1dg-t18-ar"
        },
        {
          "yaw": -0.2960302319402146,
          "pitch": -0.01080421610061677,
          "rotation": 0,
          "target": "135-1dg-t18-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "133-1dg-t18-bad",
      "name": "1DG, T18, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.58809220303913,
          "pitch": -0.06543232885757533,
          "rotation": 0,
          "target": "132-1dg-t18-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "134-1dg-t18-ar",
      "name": "1DG, T18, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8729855219683866,
          "pitch": 0.006991495603106301,
          "rotation": 0,
          "target": "132-1dg-t18-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "135-1dg-t18-sz",
      "name": "1DG, T18, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6776268538249974,
          "pitch": 0.015978884481491207,
          "rotation": 0,
          "target": "132-1dg-t18-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "136-1dg-t18-balkon",
      "name": "1DG, T18, Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.112314182031117,
          "pitch": 0.02251740572023664,
          "rotation": 0,
          "target": "131-1dg-t18-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "137-2dg-stgh-1",
      "name": "2DG, STGH (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.05463639397545883,
        "pitch": 0.49170040719135777,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.9664224222056532,
          "pitch": 0.22943359452891343,
          "rotation": 3.141592653589793,
          "target": "114-1dg-stgh"
        },
        {
          "yaw": 3.088896547474148,
          "pitch": -0.8737283406623533,
          "rotation": 0,
          "target": "138-dach"
        },
        {
          "yaw": -3.1151140758619746,
          "pitch": -0.004814688611782358,
          "rotation": 0,
          "target": "139-2dg-stgh-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "138-dach",
      "name": "Dach",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0561543063913952,
          "pitch": 0.6732869888183775,
          "rotation": 3.141592653589793,
          "target": "137-2dg-stgh-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "139-2dg-stgh-2",
      "name": "2DG, STGH (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06392339473585551,
          "pitch": -0.4872241515071032,
          "rotation": 0,
          "target": "138-dach"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "137-2dg-stgh-1"
        },
        {
          "yaw": 1.556808663052986,
          "pitch": -0.07408362774426358,
          "rotation": 0,
          "target": "140-2dg-t19-essbereich"
        },
        {
          "yaw": -1.600020613672509,
          "pitch": 0.01764195424828685,
          "rotation": 0,
          "target": "150-2dg-t20-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "140-2dg-t19-essbereich",
      "name": "2DG, T19, Essbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1715797826160639,
          "pitch": 0.0452881953992037,
          "rotation": 0,
          "target": "139-2dg-stgh-2"
        },
        {
          "yaw": -0.30107003155367984,
          "pitch": 0.009050495857744423,
          "rotation": 0,
          "target": "141-2dg-t19-sz"
        },
        {
          "yaw": 0.6784312933656054,
          "pitch": -0.024784643391337013,
          "rotation": 0,
          "target": "143-2dg-t19-bad"
        },
        {
          "yaw": -3.089922077879198,
          "pitch": 0.024463892348965288,
          "rotation": 0,
          "target": "144-2dg-t19-terr-straenseite"
        },
        {
          "yaw": -2.099838549401495,
          "pitch": 0.050915539345272265,
          "rotation": 0,
          "target": "145-2dg-t19-wz"
        },
        {
          "yaw": -1.5775674958651127,
          "pitch": 0.04463368076923402,
          "rotation": 0,
          "target": "149-2dg-t19-ar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "141-2dg-t19-sz",
      "name": "2DG, T19, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.037635502846084634,
          "pitch": 0,
          "rotation": 0,
          "target": "142-2dg-t19-terr-hofseite"
        },
        {
          "yaw": 2.862696736246347,
          "pitch": -0.013676523187717393,
          "rotation": 0,
          "target": "140-2dg-t19-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "142-2dg-t19-terr-hofseite",
      "name": "2DG, T19, Terr. Hofseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.874407199399549,
          "pitch": 0.01964072539578332,
          "rotation": 0,
          "target": "141-2dg-t19-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "143-2dg-t19-bad",
      "name": "2DG, T19, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0908997363849657,
          "pitch": 0.03567661689028867,
          "rotation": 0,
          "target": "140-2dg-t19-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "144-2dg-t19-terr-straenseite",
      "name": "2DG, T19, Terr. Straßenseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18896891313799813,
          "pitch": 0.04044897190043528,
          "rotation": 0,
          "target": "140-2dg-t19-essbereich"
        },
        {
          "yaw": -1.38232508003124,
          "pitch": 0.02656049038625774,
          "rotation": 0,
          "target": "145-2dg-t19-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "145-2dg-t19-wz",
      "name": "2DG, T19, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7718464068209361,
          "pitch": -0.01044195376521806,
          "rotation": 0,
          "target": "140-2dg-t19-essbereich"
        },
        {
          "yaw": 1.6773231791636087,
          "pitch": -0.017728351650021068,
          "rotation": 0,
          "target": "144-2dg-t19-terr-straenseite"
        },
        {
          "yaw": -0.710731397077021,
          "pitch": 0.007991975053279532,
          "rotation": 0,
          "target": "146-2dg-t19-stiege"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "146-2dg-t19-stiege",
      "name": "2DG, T19, Stiege",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.6662820804176413,
        "pitch": 0.048981956022810635,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.1642612994025274,
          "pitch": 0.3760420946299874,
          "rotation": 3.141592653589793,
          "target": "145-2dg-t19-wz"
        },
        {
          "yaw": -0.31602489699553615,
          "pitch": -0.2014694676112061,
          "rotation": 0,
          "target": "147-2dg-t19-dachausstieg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "147-2dg-t19-dachausstieg",
      "name": "2DG, T19, Dachausstieg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.6231562043547356,
        "pitch": 0.09755690211934187,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.9198842164648457,
          "pitch": 0.6719530098039765,
          "rotation": 9.42477796076938,
          "target": "146-2dg-t19-stiege"
        },
        {
          "yaw": -0.08749455539609308,
          "pitch": -0.047301646418993926,
          "rotation": 0,
          "target": "148-2dg-t19-terr-rooftop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "148-2dg-t19-terr-rooftop",
      "name": "2DG, T19, Terr. RoofTop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.960624066225062,
          "pitch": 0.07166858659169506,
          "rotation": 0,
          "target": "147-2dg-t19-dachausstieg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "149-2dg-t19-ar",
      "name": "2DG, T19, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5633536409995896,
          "pitch": -0.006385966022758538,
          "rotation": 0,
          "target": "140-2dg-t19-essbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "150-2dg-t20-wz",
      "name": "2DG, T20, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5725126291710696,
          "pitch": -0.049843436151466136,
          "rotation": 0,
          "target": "139-2dg-stgh-2"
        },
        {
          "yaw": -1.442878762350169,
          "pitch": 0.05095641433026543,
          "rotation": 0,
          "target": "151-2dg-t20-kochbereich"
        },
        {
          "yaw": -0.369970361957888,
          "pitch": -0.00702099681457824,
          "rotation": 0,
          "target": "154-2dg-t20-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "151-2dg-t20-kochbereich",
      "name": "2DG, T20, Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9082618992938363,
          "pitch": -0.014874828173660148,
          "rotation": 0,
          "target": "150-2dg-t20-wz"
        },
        {
          "yaw": -3.085592156629044,
          "pitch": 0.05014703139331189,
          "rotation": 0,
          "target": "152-2dg-t20-terr-straenseite"
        },
        {
          "yaw": -0.1715036811885522,
          "pitch": 0.0037100688386555447,
          "rotation": 0,
          "target": "153-2dg-t20-ar"
        },
        {
          "yaw": 0.6010003337302088,
          "pitch": -0.006469742199886497,
          "rotation": 0,
          "target": "154-2dg-t20-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "152-2dg-t20-terr-straenseite",
      "name": "2DG, T20, Terr. Straßenseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.024288585037309574,
          "pitch": 0.0091298832568949,
          "rotation": 0,
          "target": "151-2dg-t20-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "153-2dg-t20-ar",
      "name": "2DG, T20, AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8199868122174365,
          "pitch": 0.07835904923027392,
          "rotation": 0,
          "target": "151-2dg-t20-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "154-2dg-t20-sz",
      "name": "2DG, T20, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "156-2dg-t20-terr-hofseite"
        },
        {
          "yaw": -2.571871080295356,
          "pitch": 0.06364631175479651,
          "rotation": 0,
          "target": "151-2dg-t20-kochbereich"
        },
        {
          "yaw": -2.883936100514653,
          "pitch": 0.06325643032414696,
          "rotation": 0,
          "target": "150-2dg-t20-wz"
        },
        {
          "yaw": -1.9723588775290786,
          "pitch": 0.049355600002813915,
          "rotation": 0,
          "target": "155-2dg-t20-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "155-2dg-t20-bad",
      "name": "2DG, T20, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2391267866824194,
          "pitch": 0.004227582241945527,
          "rotation": 0,
          "target": "154-2dg-t20-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "156-2dg-t20-terr-hofseite",
      "name": "2DG, T20, Terr. Hofseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0315977012299555,
          "pitch": 0.0047980544187389285,
          "rotation": 0,
          "target": "154-2dg-t20-sz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mill34_Strassentrakt_231222-27",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
