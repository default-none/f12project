import '../layouts/TopLayer.scss';
const TopLayer = ({name}) => {
    return ( 
        <div className="SubComponent">
          <div className="ComponentTxt">
            <h1>{name}</h1>
            <p>밤을 걷다</p>
          </div>
        </div>
     );
};
 
export default TopLayer;  