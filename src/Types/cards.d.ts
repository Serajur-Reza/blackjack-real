interface IcardDeck{
    deck: Tcard[],
    remaining: Tcard[]
}

type Tcard={
    suite: string,
    value: string | number
}