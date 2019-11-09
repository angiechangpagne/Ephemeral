import React, {useState, useEffect } from "./node_modules/react"


let useMedia=query=>{
    let [matches,setMatches]=useState(
        window.matchMedia(query).matches
        )


        useEffect(
            () => {
                let media=window.matchMedia(query)
                let listener = () =>
                    setMatches(media.matches)
                media.addListener(listener)
                listener()
                return () => media.removeListener(listener)
            },
            [auery]
        )

        function MediaQueryApp(){
            let small=useMedia("(mid-width: 600px")
            let large=useMedia("min-width:1000px")
            return (
                <div className="Media">
                    <p>Small ? {small ? "Yes" : "No"}.</p>
                    <p>Large ? {large ? "Yes" : "No"}.</p>  
                </div>
            )
        }
}

export default MediaQuery