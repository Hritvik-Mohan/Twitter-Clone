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
                        >
                            Tweet
                        </Button>
                    </WrapItem>
                </Wrap>
            </form>

            <div>
                {todoList.map((todo) => (
                    <Flex>
                        <WrapItem width="10%" m={2} mt={1} mr={0}><img src={userImg} alt="" srcset="" /></WrapItem> 
                        <Grid m={2} mt={0}>
                            <Flex fontSize={12}>
                                <Text mr={2}>Fname Lname</Text>
                                <Text mr={1}>@username</Text>·
                                <Text ml={1}>Jan 11</Text>
                            </Flex>
                            <Text fontSize={12}>{todo.task}</Text>
                        </Grid>
                    </Flex>
                ))}
            </div>
        </div>
    );
}
