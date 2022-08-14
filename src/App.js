import {CarDetails} from "./CarDetails";

export function App() {
    return (
        <div>
            <CarDetails
                initialData={{
                    model: "Audi A1",
                    year: 2022,
                    color: "metallic gray",
                }}
            />
        </div>
    );
}
