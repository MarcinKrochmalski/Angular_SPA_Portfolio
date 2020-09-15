import { transition, trigger, query, style, animate, group, sequence } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [

        transition('* => *', [

            group([

                query(':enter section', [
                    style({

                        opacity: 0

                    }),
                    sequence([
                        animate('400ms ease-out', style({ opacity: 0 })),
                        animate('400ms ease-out',
                            style({
                                opacity: 1
                            })
                        )
                    ])

                ], { optional: true }),

                query(':enter .topWrapperAnimation', [
                    style({

                        marginBottom: '-30vh'

                    }),
                    sequence([
                        animate('400ms ease-out', style({ opacity: 1 })),
                        animate('400ms ease-out',
                            style({
                                marginBottom: '2vh'
                            })
                        )
                    ])

                ], { optional: true }),

                query(':enter .bottomWrapperAnimation', [
                    style({
                        marginTop: '-30vh'
                    }),
                    sequence([
                        animate('400ms ease-out', style({ opacity: 1 })),
                        animate('400ms ease-out',
                            style({
                                marginTop: '2vh'
                            })
                        )
                    ])

                ], { optional: true }),

                query(':enter .center, :enter .bar', [
                    style({
                        width: '0vw'
                    }),
                    sequence([
                        animate('400ms ease-out', style({ opacity: 1 })),
                        animate('400ms ease-out',
                            style({
                                width: '100vw'
                            })
                        )
                    ])

                ], { optional: true }),

                query(':leave section', [
                    style({

                        opacity: 1

                    }),

                    animate('400ms ease-in',
                        style({
                            opacity: 0
                        })
                    )

                ], { optional: true }),

                query(':leave .topWrapperAnimation', [

                    style({
                        marginBottom: '2vh'

                    }),

                    animate('400ms ease-in',
                        style({
                            marginBottom: '-30vh'
                        })
                    )

                ], { optional: true }),

                query(':leave .bottomWrapperAnimation', [

                    style({
                        marginTop: '2vh'
                    }),

                    animate('400ms ease-in',
                        style({
                            marginTop: '-30vh'
                        })
                    )

                ], { optional: true }),

                query(':leave .center, :leave .bar', [
                    style({
                        width: '100vw'
                    }),
                    animate('400ms ease-in',
                        style({
                            width: '0vw'
                        })
                    )
                ], { optional: true })

            ])

        ])

    ]);