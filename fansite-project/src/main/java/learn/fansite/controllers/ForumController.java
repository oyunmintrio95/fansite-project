package learn.fansite.controllers;

import learn.fansite.domain.ForumService;
import learn.fansite.domain.Result;
import learn.fansite.models.Forum;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/forum")
public class ForumController {

    private final ForumService service;

    public ForumController(ForumService service){this.service = service;}

    @GetMapping
    public List<Forum> findAll(){
        return service.findAll();
    }

    @GetMapping("/{forumId}")
    public Forum findById(@PathVariable int forumId){return service.findById(forumId);}

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Forum forum){
        Result<Forum> result = service.add(forum);
        if(result.isSuccess()){
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping
}
