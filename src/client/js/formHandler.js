import evaluation from "../../server/mockAPI";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (Client.checkForLength(formText)) {
        console.log("::: Form Submitted :::")

        // performs a POST request to send the input text and perform the sentiment analysis
        let body = { reqBody: formText };
        evaluateSentiments('http://localhost:8080/nplApi', body)
        .then(function(evaluation) {
            updateUi(evaluation);
        })

        // Generates the request to the server to fetch the NLP evaluation
        async function evaluateSentiments (url='', data={}) {
            const res = await fetch (url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            try {
                const evaluation = res.json();
                return evaluation;
            } catch (e) {
                console.log('Error: ', e);
            }

        }

        // Function - updates the UI with the information fetched from the external application
        const updateUi = (data={}) => {
            console.log(data);

            document.getElementById('agreement').innerHTML = `Agreement or disagreement: ${data.agreement}`;
            document.getElementById('confidence').innerHTML = `Evaluation confidence level (100 is max): ${data.confidence}`;
            document.getElementById('irony').innerHTML = `Is it an ironic evaluation: ${data.irony}`;
            document.getElementById('subjectivity').innerHTML = `Objective or subjective: ${data.subjectivity}`;
        }
    }
}

export { handleSubmit }
