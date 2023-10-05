package learn.fansite.domain;

import learn.fansite.data.ForumRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ForumServiceTest {

    @Autowired
    ForumService service;

    @MockBean
    ForumRepository repository;

    @Test
    void shouldAdd(){
        
    }

}