## Activity in state machine

wait for an activity to finish before starting the next step in the state machine configuration. i have included sample aws commands to poll and activity and to pass a success state back to the state machine

poll state machine

```bash
user@Users-MBP stepfunctionsActivities % aws stepfunctions get-activity-task --activity-arn arn:aws:states:us-east-1:432599188850:activity:myActivity
{
    "taskToken": "AQBsAAAAKgAAAAIAAAAAAAAAAXNosRjCT+ITiFZdTV3naKynf7iJGRLa5e4ZtVr1AW4QklcZeshoqRXqzVv58RSLzNxHEuJOmK/Gw/IbT5Kdvms=AAAAKgAAAAIAAAAAAAAAATk8Ebk8L448pMl3y7398GY73aDqx8JoPzvVQEVRox6dDf2vDIhnPjqH81MOH+2kfJOIjBf2LlCA5CMbsYL8ywIkOfKdixj4NDfhcCaPFvqTzg9O4VZ45UfGruouZbJ/dPpddqBIRkuSqEf9B8B7KrJtKaQLLHrrhkgVezPod57hsQSkxSJoX8v9R8VStWhE2FrbaxPn/kENa/MBwQxCfu0YM4rP8b1qj3KDRsOzaHgM",
    "input": "{\"name\":\"emi\"}"
}
```

send success state to task

```bash
user@Users-MBP stepfunctionsActivities % aws stepfunctions send-task-success --task-token "AQBsAAAAKgAAAAIAAAAAAAAAAXNosRjCT+ITiFZdTV3naKynf7iJGRLa5e4ZtVr1AW4QklcZeshoqRXqzVv58RSLzNxHEuJOmK/Gw/IbT5Kdvms=AAAAKgAAAAIAAAAAAAAAATk8Ebk8L448pMl3y7398GY73aDqx8JoPzvVQEVRox6dDf2vDIhnPjqH81MOH+2kfJOIjBf2LlCA5CMbsYL8ywIkOfKdixj4NDfhcCaPFvqTzg9O4VZ45UfGruouZbJ/dPpddqBIRkuSqEf9B8B7KrJtKaQLLHrrhkgVezPod57hsQSkxSJoX8v9R8VStWhE2FrbaxPn/kENa/MBwQxCfu0YM4rP8b1qj3KDRsOzaHgM" --task-output 4
```

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "aws-node" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-node-dev (90s)

functions:
  hello: aws-node-dev-hello (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```
serverless invoke --function hello
```

Which should result in response similar to the following:

```json
{
  "statusCode": 200,
  "body": "{\"message\":\"Go Serverless v4.0! Your function executed successfully!\"}"
}
```

### Local development

The easiest way to develop and test your function is to use the Serverless Framework's `dev` command:

```
serverless dev
```

This will start a local emulator of AWS Lambda and tunnel your requests to and from AWS Lambda, allowing you to interact with your function as if it were running in the cloud.

Now you can invoke the function as before, but this time the function will be executed locally. Now you can develop your function locally, invoke it, and see the results immediately without having to re-deploy.

When you are done developing, don't forget to run `serverless deploy` to deploy the function to the cloud.
