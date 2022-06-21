export type LatLng = {
    lat: number;
    lng: number;
}

export type RouteProps = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
};

export class Route{
    public props: Required<RouteProps>
    constructor(props: RouteProps) {`
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    private set title(value:string) {
        this.props.title = 'title updated';
    }
}

const rota = new Route({
    title: 'minha rota',
    startPosition: { lat: 15, lng: 15 },
    endPosition: { lat: 20, lng: 20 },
    points: [
        { lat: 17, lng: 17 },
        { lat: 19, lng: 19 },
    ]
})