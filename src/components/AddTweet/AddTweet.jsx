import React from "react";
import { useState } from "react";
import { WrapItem, Button, Wrap, Textarea, Text, Flex, Grid } from "@chakra-ui/react";
import userImg from '../../assets/user.png'

export default function AddTweet() {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    // const [completedTaskCount, setCompletedTaskCount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput("");
    };

    const handleClick = () => {
        const id = todoList.length + 1;
        setTodoList((prev) => [
            ...prev,
            {
                id: id,
                task: input,
                complete: false,
            },
        ]);
        setInput("");
    };

    const today = new Date(); // create a new Date object with the current date and time
    const date = today.getDate(); // get the day of the month (1-31)
    const year = today.getFullYear(); // get the year (four digits)
    
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    
    const monthIndex = today.getMonth(); // get the month (0-11) and add 1 to match the standard calendar format
    const monthName = months[monthIndex];

    // concatenate the day, month, and year into a string with the desired format
    const dateString = `${monthName} ${date}`;


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <>
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="What's happening!"
                        size="sm"
                        mt={5}
                        mb={2}
                        fontSize={16}
                    />
                </>
                <Wrap justify="right">
                    <WrapItem>
                        <Button
                            type="submit"
                            colorScheme="twitter"
                            value={input}
                            onClick={() => handleClick()}
                            m={2}
                            mr={0}
                            disabled={true  }
                        >
                            Tweet
                        </Button>
                    </WrapItem>
                </Wrap>
            </form>

            <div>
                {todoList.map((todo) => (
                    <Flex key={todo.id}>
                        <WrapItem width="8%" m={2} mt={1} mr={0}><img src={userImg} alt="" srcSet="" /></WrapItem>
                        <Grid m={2} mt={0}>
                            <Flex fontSize={12}>
                                <Text mr={2}>Fname Lname</Text>
                                <Text mr={1}>@username</Text>·
                                <Text ml={1}>{dateString}</Text>
                            </Flex>
                            <Text fontSize={12}>{todo.task}</Text>
                        </Grid>
                    </Flex>
                ))}
            </div>
        </div>
    );
}
