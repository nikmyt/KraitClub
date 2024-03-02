import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./elements/Footer";
import Header from "./elements/Header";

const MainPage = (props) => {
    // var stuff = props;
    var stuff = ``;

    const picturesData = [
        { id: 1, imageUrl: 'url1' },
        { id: 2, imageUrl: 'url2' },
        { id: 3, imageUrl: 'url3' },
        // Add more picture data as needed
    ];

    const containerStyle = {
        background: '#333333',
        color: '#4f8d4b',
    };

    //WHAT DO YOU MEAN I GOTTA CLOSE THE BR TAG
    return (
        <div style={containerStyle} className="baground">
            <Header/>
            <div className="row">
            {picturesData.map((picture) => (
                <PictureCard key={picture.id} imageUrl={picture.imageUrl} />
            ))}
            </div>

            <Footer/>
        </div>
    );
};

const PictureCard = () => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src="your-image-url.jpg" className="card-img-top" alt="Polaroid" />
                <div className="card-body">
                    <h5 className="card-title">Picture</h5>
                    <p className="card-text">Short description is good...</p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;