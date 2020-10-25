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
        /* .then(res => res.json()) */
        .then(function(evaluation) {
            console.log(evaluation);
            updateUi();
        })

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

        const updateUi = (data={}) => {

        }
        /* fetch('http://localhost:8080/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        }) */
    }
}

export { handleSubmit }
