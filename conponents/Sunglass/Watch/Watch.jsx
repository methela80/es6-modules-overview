const Watch = ({watch}) => {

    const {name, price, id} = watch;


    return (
        
        <div>
            <h5>id: {id}</h5>
            <h3>Watche:{name}</h3>
            <p>Price:{price}</p>
            
        </div>
    );
};

export default Watch;