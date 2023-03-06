import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';
import { addRecord } from '../../actions/embedding';

const Embedding = ( {auth, setAlert, addRecord} ) => {
    const [formData, setFormData] = useState({
        artist: '',
        genre: '',
        title: '',
        song: '',
    });

    const { artist, genre, title, song } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        await addRecord(formData);
        setAlert(`${artist}'s lyric song "${title}" was added successfully!`, "success");
    };
    return (
        <section className="container-small">
        <h1 className="large text-primary text-center">Add Song Data</h1>
        <p className="lead text-center">
            {/* <i className="fas fa-user" /> You can modify your profile here. */}
        </p>
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                {/* <div className="lead text-primary b">Artist Name :</div> */}
                <input
                    type="text"
                    placeholder="Artist Name"
                    name="artist"
                    value={artist}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form-group">
                {/* <div className="lead text-primary b">Genre :</div> */}
                <input
                    type="text"
                    placeholder="Genre"
                    name="genre"
                    value={genre}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form-group">
                {/* <div className="lead text-primary b">Song Title :</div> */}
                <input
                    type="text"
                    placeholder="Song Title"
                    name="title"
                    value={title}
                    onChange={onChange}
                    required
                />
            </div>            
            <div className="form-group">
                {/* <div className="lead text-primary b">Song Content :</div> */}
                <textarea
                    className="embedding-song-content"
                    placeholder="Song Content"
                    name="song"
                    value={song}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="text-center">
                <input type="submit" className="btn btn-success" value="Add" />
            </div>
        </form>
        </section>
    );
};

Embedding.propTypes = {
  auth: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
  addRecord: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, addRecord })(Embedding);
