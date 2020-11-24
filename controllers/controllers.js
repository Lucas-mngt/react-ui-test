const getColors = (req, res, next) => {
    res.status(200).json({
        body: [
            {
                name : 'red',
                code : '#DC143C',
                title: 'The Red is red',
                text: 'Proin facilisis, felis eget ullamcorper egestas, risus quam sagittis massa, a vestibulum lectus lorem vel urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'
            },
            {
                name : 'blue',
                code : '#20B2AA' ,
                title: 'The Blue is blue',
                text: 'Proin facilisis, felis eget ullamcorper egestas, risus quam sagittis massa, a vestibulum lectus lorem vel urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'
            },
            {
                name : 'green',
                code : '#228B22',
                title: 'The Green is Green',
                text: 'Proin facilisis, felis eget ullamcorper egestas, risus quam sagittis massa, a vestibulum lectus lorem vel urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'
            },
            {
                name : 'orange',
                code : '#FFA500',
                title: 'The Orange is Orange',
                text: 'Proin facilisis, felis eget ullamcorper egestas, risus quam sagittis massa, a vestibulum lectus lorem vel urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'
            },
            {
                name : 'white',
                code : '#E6E6FA',
                title: 'The White is White',
                text: 'Proin facilisis, felis eget ullamcorper egestas, risus quam sagittis massa, a vestibulum lectus lorem vel urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'
            },
            {
                name : 'purple',
                code : '#BA55D3',
                title: 'The Purple is Purple',
                text: 'Proin facilisis, felis eget ullamcorper egestas, risus quam sagittis massa, a vestibulum lectus lorem vel urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'
            }
        ]
    });
};

module.exports.getColors = getColors;