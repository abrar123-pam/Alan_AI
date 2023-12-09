// {Name: Basic_example_for_AI_assistant}
// {Description: Learn how to create a dialog script with voice/text commands and text corpus for question answering}

// Use this sample to create your own voice/text commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});

intent('play $(CHANNEL* (.*))', p => {
     let channel = project.radios.filter(x=> x.name.toLowerCase() === p.CHANNEL.value.toLowerCase())[0];
    try{
        p.play({"command" : "play_channel","id":channel.id});
        p.play('(playing now|on it)');
    }catch(err){
        console.log("Can't play");
        p.play("I Cannot play this");
    }
});


intent('play $(CATEGORY* (.*))', p => {
     let channel = project.radios.filter(x=> x.name.toLowerCase() === p.CHANNEL.value.toLowerCase())[0];
    try{
        p.play({"command" : "play_channel","id":channel.id});
        p.play('(playing now|on it)');
    }catch(err){
        console.log("Can't play");
        p.play("I Cannot play this");
    }
});

intent('play','play (the|) (some|) music', p=> {
    p.play({"command":"play"});
    p.play('(ok boss)');
});

intent('stop (it|)','stop (the|) music','pause (it|)','pause (the|) music', p=> {
    p.play({"command":"stop"});
    p.play('(ok boss as your wish)');
});

intent('(play|) next (channel|FM|radio)', p=> {
    p.play({"command":"next"});
    p.play('(playing next boss)');
});

intent('(play|) previous (channel|FM|radio)', p=> {
    p.play({"command":"previous"});
    p.play('(playing previous boss)');
});


// Give your AI assistant some knowledge about the world
corpus(`
    Hello, I'm Alan.
    This is a demo application.
    You can learn how to teach Alan useful skills.
    I can teach you how to write Alan Scripts.
    I can help you. I can do a lot of things. I can answer questions. I can do tasks.
    But they should be relevant to this application.
    I can help with this application.
    I'm Alan. I'm a virtual assistant. I'm here to help you with applications.
    This is a demo script. It shows how to use Alan.
    You can create dialogs and teach me.
    For example: I can help navigate this application.
`);
