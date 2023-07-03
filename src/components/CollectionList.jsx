import data from "../data/plants.json";
import CollectionPanel from "./CollectionPanel";
import "../styles/Collection.css"

export default function CollectionList() {

    return(
        <>
            <h2>Collection List</h2>
            <div className="collection-container">
                {
                    data.map((element, index) => {
                        return (
                            <CollectionPanel data={element} key={index}/>
                        )
                    })
                }
            </div>

        </>
    )
}