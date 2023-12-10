export enum Pages {
    WELCOME = 'welcome',
    PROGRAM = 'program',
    LOCATION = 'place',
    ACCOMODATION = 'housing',
    ACTIVITIES = 'activities',
    LIST = 'list',
}

export const PagesTitles: Record<Pages, string | null> = {
    [Pages.WELCOME]: null,
    [Pages.PROGRAM]: 'Programme',
    [Pages.LOCATION]: 'Accès',
    [Pages.ACCOMODATION]: 'Logements',
    [Pages.ACTIVITIES]: 'Activités',
    [Pages.LIST]: 'Liste de mariage',
}
