export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'User 1',
        gmail: 'Email 1',
        productName: 'NOM DE PROJET',
        status: 'danger',
        weeks: 2,
        budget: 'HTML/CSS'
    },
    {
        image: 'assets/images/users/user5.jpg',
        uname: 'User 2',
        gmail: 'Email 2',
        productName: 'NOM DE PROJET',
        status: 'success',
        weeks: 35,
        budget: 'Java'
    },
    {
        image: 'assets/images/users/user5.jpg',
        uname: 'User 3',
        gmail: 'Email 3',
        productName: 'NOM DE PROJET	',
        status: 'success',
        weeks: 9,
        budget: '#C'
    },
    {
        image: 'assets/images/users/user1.jpg',
        uname: 'User 4',
        gmail: 'Email 4',
        productName: 'NOM DE PROJET',
        status: 'danger',
        weeks: 15,
        budget: 'PHP'
    },

]