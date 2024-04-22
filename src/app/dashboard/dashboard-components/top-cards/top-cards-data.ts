export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-wallet',
        title: '40',
        subtitle: 'Utilisateur inscrit'
    },
    
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '4',
        subtitle: 'Projet annuel'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '20',
        subtitle: 'Tache terminée'
    },

] 