const fs = require("fs");

const JSONData = {
    data: []
};

const group = [
    // {
    //     label: 'Cartoon',
    //     value: '',
    //     start: 460,
    //     end: 489
    // },
    {
        label: 'Cartoon Fruits',
        value: 'fruits',
        start: 386,
        end: 409
    },
    {
        label: 'Sports',
        value: 'sports',
        start: 410,
        end: 459
    },
    {
        label: 'Autumn',
        value: 'seasons',
        start: 40,
        end: 49
    },
    {
        label: 'Computer',
        value: 'electronics',
        start: 50,
        end: 75
    },
    {
        label: 'Flags',
        value: 'flags',
        start: 137,
        end: 151
    },
    {
        label: 'Trees',
        value: 'threes',
        start: 152,
        end: 181
    },
    {
        label: 'Food',
        value: 'food',
        start: 182,
        end: 201
    },
    {
        label: 'Clothes',
        value: 'clothes',
        start: 202,
        end: 222
    },
    {
        label: 'Medals',
        value: 'medals',
        start: 223,
        end: 252
    },
    {
        label: 'Business',
        value: 'business',
        start: 253,
        end: 261
    },
    {
        label: 'Activity',
        value: 'activity',
        start: 262,
        end: 270
    },
    {
        label: 'Vintage',
        value: 'vintage',
        start: 301,
        end: 350
    },
    {
        label: 'Cartoon',
        value: '',
        start: 351,
        end: 385
    },
    {
        label: 'Animals',
        value: 'animals',
        start: 490,
        end: 519
    },
    {
        label: 'Hand Painted',
        value: 'hand_painted',
        start: 0,
        end: 39
    }
];

const baseUrl = 'https://nihaojob.github.io/vue-fabric-editor-static/svg/';
JSONData.data = group.map((item, i) => {
    const list = [];
    for (let index = item.start; index < item.end; index++) {
        list.push({
            "label": item.label + index,
            "value": i + '-' + index,
            "tempUrl": baseUrl + index + ".svg",
            "src": baseUrl + index + ".svg"
        });
    }
    return {
        label: item.label,
        value: item.value,
        list
    };
});

fs.writeFile('type.json', JSON.stringify(JSONData), function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Write successful');
});
