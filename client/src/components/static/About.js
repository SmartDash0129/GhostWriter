import React from 'react';
// import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const About = ({isAuthenticated}) => {
    if (!isAuthenticated) {
        // return <Navigate to="/login" />;
    }
  return (
    <section className="container">
        <div> 
            {/* <!-------------------------- Paragraph 1 --------------------------- --> */}
            <div className="text-center">
                <div className="large b text-primary">
                    About
                </div>
                <div>
                    Welcome to our website dedicated to AI songwriting! Here, you will find information and resources about the use of artificial intelligence in the creation of music. From the latest research and developments to tutorials and workshops, our goal is to provide a comprehensive understanding of how AI is shaping the future of music composition and production. Whether you’re a musician, a producer, or just a music enthusiast, we hope you find the information on our site valuable and inspiring. Thank you for visiting! 
                </div>
            </div>

            <hr className="solid" />

            {/* <!-------------------------- Paragraph 2 --------------------------- --> */}
            <div className="section_content">
                <div className="content_2_1">
                    <img src="assets/img/closeup-portrait-of-a-male-hand-writing-on-a-paper-SBI-300855399-1024x683.png" className="inner-fill" />
                </div>
                <div className="content_2_2">
                    <div className="tab-1">AI songwriting has the potential to revolutionize the music 
                        industry by providing new and innovative ways to create music. 
                        Some of the benefits of AI songwriting include: 
                    </div><br />
                    <div className="tab-2">
                        Efficiency: AI algorithms can quickly analyze and process large amounts of data, allowing for faster and more efficient music composition. 
                        Creativity: AI can generate new and unique melodies, chord progressions, and beats that a human composer may not have thought of. 
                        Personalization: AI can analyze a person’s listening history and preferences to generate music tailored to their taste. 
                        Collaboration: AI can be used to assist human composers, providing inspiration and new ideas to enhance their creative process. 
                        Scalability: AI can generate an unlimited number of songs, making it possible to create music for different genres and styles.
                    </div><br />
                    <div className="tab-1">
                        Overall, AI song writing can be a powerful tool for music creators, 
                        helping to open up new possibilities for music creation and 
                        increasing the efficiency and creativity of the music production 
                        process.
                    </div>
                </div>
            </div>

            <hr className="solid" />

            {/* <!-------------------------- Paragraph 3 --------------------------- --> */}
            <div className="section_content">
                <div className="content_3_1">
                    <div className="tab-1">
                        Helping You sound Great!
                    </div>
                    <div className="lead p-1 b">
                        Let's Talk about AI
                    </div>
                    <div className="tab-1">
                        In simple terms, AI refers to the development of computer systems that can learn from data and experience, and make decisions based on that learning. AI systems can take the form of software programs like Ghost Writer. Some examples of AI include virtual personal assistants like Siri or Alexa, self-driving cars, and recommendation systems used by online retailers to suggest products to customers. 
                        The goal of AI is to create machines that can perform tasks without being explicitly programmed to do so. Our AI system is  trained to perform specific tasks, such as creating song lyrics, by being fed large amounts of data and using algorithms to learn from that data.      
                        Overall, AI has the potential to greatly impact our daily lives, by making tasks easier and more efficient, and by creating new possibilities for automation and innovation. 
                    </div>
                </div>
                <div className="content_3_2">
                    <img src="assets/img/com0p.png" className="inner-fill" /> 
                </div>
            </div>

            <hr className="solid" />

            {/* <!-------------------------- Paragraph 4 --------------------------- --> */}
            <div className="section_content">
                <div className="content_4_1">
                    <img src="assets/img/fire-icon-black.png" className="inner-fill" />
                </div>
                <div className="content_4_2">
                    <div className="tab-1">
                        Fine-tuning a pre-trained AI model can be helpful because it allows the model to quickly adapt to a new task or dataset, using the knowledge it has already learned from a similar task or dataset. This can save a significant amount of time and computational resources compared to training a model from scratch. Additionally, fine-tuning can also improve the performance of a model on a specific task, as the model has already been exposed to related data and can learn from it more efficiently.
                    </div>
                </div>
                <div className="content_4_3">
                    <div className="tab-1">
                        <div className="small b">Ai Testimonial:</div>
                “Fine-tuning AI models allows for faster, more efficient and cost-effective adaptation to new tasks and datasets, while also improving performance and increasing output. Automating the process of creating lyrics with AI technology can not only save time and resources, but also lead to a more consistent and diverse output, while potentially reducing the need to hire external songwriters or lyricists. The implementation of AI in the music industry is truly a game changer that is revolutionizing the way we create and consume music.”
                    </div>
                </div>
            </div>

            <hr className="solid" />

            {/* <!-------------------------- Paragraph 5 --------------------------- --> */}
            <div className="section_content">
                <div className="content_5_1">
                    <div className="tab-1">
                        Saving money by automating your own lyrics…<br />
                        Automating the process of creating lyrics using AI can potentially save money in a few ways. Firstly, it can save time and resources that would have been spent on writing and editing lyrics manually. Additionally, it can allow for faster and more efficient songwriting and increase the output of a songwriter or a music band.
                        Another way it can save money is by reducing the need to hire external songwriters or lyricists. This could be especially beneficial for smaller music production companies or independent artists who may not have the budget to hire multiple songwriters or lyricists.
                        Finally, automating the process can also lead to more consistent and diverse output. By reducing the need for the human error and subjectivity, it can produce lyrics that are less repetitive and more interesting.
                        However, it is worth noting that AI-generated lyrics may not always have the same level of creativity and uniqueness as human-written lyrics, and it’s up to the final consumer to decide the value of the automated lyrics.
                    </div>
                </div>
                <div className="content_5_2">
                    <img src="assets/img/vector-drum-kit-SBI-300126431-1024x930.png" className="inner-fill" />
                </div>
            </div>

            <hr className="solid" />

            {/* <!-------------------------- Paragraph 6 --------------------------- --> */}
            <div className="section_content">
                <div className="content_6_1">
                    <img src="assets/img/frustrated-businessman-sitting-at-the-table-with-hands-on-face-over-gray-background-SBI-300854492-1024x679.png" className="inner-fill" />
                </div>
                <div className="content_6_2">
                    <div className="tab-1">
                        <div className="small b">How Ghost Writer can help writers block?</div>
                        Ghost Writer can help writers overcome writer’s block by providing inspiration and suggestions for content creation. Here are a few ways it can help by using its AI capabilities:  
                    </div><br />
                    <div className="tab-2">
                        Generating ideas: AI can analyze a writer’s existing content and suggest new ideas for writing based on the writer’s style and tone. 
                        Providing structure: AI can analyze a writer’s goals for a piece of writing and suggest a structure or outline to help organize the content. 
                        Enhancing language: AI can analyze a writer’s language and suggest alternatives, such as synonyms, to improve the writing and make it more engaging. 
                        Generating content: In some cases, AI can generate entire pieces of content, such as articles, lyrics, or even books. This can save time and effort for the writer and provide a starting point for further refinement. 
                    </div><br />
                    <div className="tab-1">
                        While AI can be a helpful tool for overcoming writer’s block, it’s important to remember that it is not a replacement for human creativity and originality. AI-generated content can provide inspiration and assistance, but it is up to the writer to refine and personalize the content to ensure it meets their standards. 
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

About.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(About);
