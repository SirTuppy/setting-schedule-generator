 templateCoords = {
    // DSN: Separate Routes and Boulders pages
    'DSN': {
        'routes': {
            header: { x: 740, y: 115 },
            tableTop: 775,
            rowHeight: 27,
            leftTable: { date: { x: 48, width: 42 }, location: { x: 94, width: 142 }, climbType: { x: 252, width: 67 }, setters: { x: 335, width: 52 } },
            rightTable: { date: { x: 408, width: 42 }, location: { x: 457, width: 142 }, climbType: { x: 615, width: 67 }, setters: { x: 698, width: 52 } }
        },
        'boulders': {
            header: { x: 740, y: 115 },
            tableTop: 775,
            rowHeight: 27,
            leftTable: { date: { x: 48, width: 42 }, location: { x: 94, width: 142 }, climbType: { x: 252, width: 67 }, setters: { x: 335, width: 52 } },
            rightTable: { date: { x: 408, width: 42 }, location: { x: 457, width: 142 }, climbType: { x: 615, width: 67 }, setters: { x: 698, width: 52 } }
        }
    },
    // GVN & PLN: Combined single page for Routes and Boulders
    'GVN': {
        'combined': {
            header: { x: 740, y: 115 },
            tableTop: 775,
            rowHeight: 27,
            leftTable: { date: { x: 48, width: 42 }, location: { x: 100, width: 142 }, climbType: { x: 252, width: 67 }, setters: { x: 335, width: 52 } },
            rightTable: { date: { x: 408, width: 42 }, location: { x: 463, width: 142 }, climbType: { x: 615, width: 67 }, setters: { x: 698, width: 52 } }
        }
    },
    'PLN': {
        'combined': { // Assumes PLN layout is similar to GVN, adjust as needed
            header: { x: 740, y: 115 },
            tableTop: 775,
            rowHeight: 27,
            leftTable: { date: { x: 48, width: 42 }, location: { x: 100, width: 142 }, climbType: { x: 252, width: 67 }, setters: { x: 335, width: 52 } },
            rightTable: { date: { x: 408, width: 42 }, location: { x: 463, width: 142 }, climbType: { x: 615, width: 67 }, setters: { x: 698, width: 52 } }
        }
    },
    // HIL, DTN, FTW: Boulders-only single page
    'HIL': {
        'boulders': {
            header: { x: 740, y: 115 },
            tableTop: 775,
            rowHeight: 27,
            leftTable: { date: { x: 48, width: 42 }, location: { x: 94, width: 142 }, climbType: { x: 252, width: 67 }, setters: { x: 335, width: 52 } },
            rightTable: { date: { x: 408, width: 42 }, location: { x: 457, width: 142 }, climbType: { x: 615, width: 67 }, setters: { x: 698, width: 52 } }
        }
    },
    'DTN': {
        'boulders': {
            header: { x: 740, y: 115 },
            tableTop: 775,
            rowHeight: 27,
            leftTable: { date: { x: 48, width: 42 }, location: { x: 94, width: 142 }, climbType: { x: 252, width: 67 }, setters: { x: 335, width: 52 } },
            rightTable: { date: { x: 408, width: 42 }, location: { x: 457, width: 142 }, climbType: { x: 615, width: 67 }, setters: { x: 698, width: 52 } }
        }
    },
    'FTW': {
        'boulders': {
            header: { x: 740, y: 115 },
            tableTop: 775,
            rowHeight: 27,
            leftTable: { date: { x: 48, width: 42 }, location: { x: 94, width: 142 }, climbType: { x: 252, width: 67 }, setters: { x: 335, width: 52 } },
            rightTable: { date: { x: 408, width: 42 }, location: { x: 457, width: 142 }, climbType: { x: 615, width: 67 }, setters: { x: 698, width: 52 } }
        }
    }
};