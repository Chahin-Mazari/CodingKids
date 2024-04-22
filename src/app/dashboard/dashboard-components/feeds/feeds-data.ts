export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: 'Nouvelle notification',
        time: 'Maintenant'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hdd',
        task: 'Serveur chargé',
        time: 'Il y a une 2 heures'
    },
    
    {
        class: 'bg-danger',
        icon: 'bi bi-person',
        task: 'Nouveau utilisateur inscrit',
        time: '30 Octobre'
    },
    {
        class: 'bg-primary',
        icon: 'bi bi-person',
        task: 'Vous avez changé votre password',
        time: '30 Juillet'
    },
    
    {
        class: 'bg-primary',
        icon: 'bi bi-bell',
        task: 'Vous avez encore une tache en attente ',
        time: 'Il y a 5 heures'
    },
] 