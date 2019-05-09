const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;  // Port for express backend

app.use(express.static(path.join(__dirname, '/build')));


app.get('/api/customers', (req, res) => {
	console.log('Customers API called...');

	const customers = 
	[
		{id: 1, firstName: 'John', lastName: 'Doe'},
		{id: 2, firstName: 'Matt', lastName: 'Ripia'},
		{id: 3, firstName: 'Jaime', lastName: 'King'},
		{id: 4, firstName: 'Cindy', lastName: 'Cai'}
	];
	res.json(customers);
});

app.get('/api/trees', (req, res) => {
    console.log('Trees API called...');

    const storeTrees = 
    [
        {
        id: 1,
        title: "Apple Tree",
        img: "img/Apple-tree.png",
        price: 10,
        company: "TreePeople",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
        },
        {
        id: 2,
        title: "Neem Tree",
        img: "img/Neem-tree.png",
        price: 16,
        company: "TreePeople",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
        },
        {
        id: 3,
        title: "The Oak Tree",
        img: "img/The-oak-tree.jpg",
        price: 8,
        company: "TreePeople",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
        },
        {
        id: 4,
        title: "Teak Tree",
        img: "img/Teak-tree.jpg",
        price: 18,
        company: "TreePeople",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
        },
        {
        id: 5,
        title: "Cork Tree",
        img: "img/Cork-tree.png",
        price: 24,
        company: "TreePeople",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
        },
        {
        id: 6,
        title: "Peepal Tree",
        img: "img/Peepal-tree.png",
        price: 17,
        company: "TreePeople",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
        },
        {
        id: 7,
        title: "Sal Tree",
        img: "img/Sal-tree.png",
        price: 30,
        company: "TreePeople",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
        },
        {
        id: 8,
        title: "Mahagony Tree",
        img: "img/Mahagony.png",
        price: 2,
        company: "TreePeople",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
        }
    ];
    
    const customers = 
    [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Matt', lastName: 'Ripia'},
        {id: 3, firstName: 'Jaime', lastName: 'King'},
        {id: 4, firstName: 'Cindy', lastName: 'Cai'}
    ];  
    res.json(storeTrees);
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));