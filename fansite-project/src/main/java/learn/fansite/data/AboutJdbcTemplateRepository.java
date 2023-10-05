package learn.fansite.data;

import learn.fansite.models.About;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class AboutJdbcTemplateRepository implements AboutRepository{
    private final JdbcTemplate jdbcTemplate;

    public AboutJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<About> findAll() {
        final String sql = "select security_clearance_id, `name` as security_clearance_name from security_clearance";
        return jdbcTemplate.query(sql, new AboutMapper());
    }
    @Override
    public About findById(int securityClearanceId) {

        final String sql = "select security_clearance_id, `name` as security_clearance_name "
                + "from security_clearance "
                + "where security_clearance_id = ?;";

        return jdbcTemplate.query(sql, new AboutMapper(), securityClearanceId)
                .stream()
                .findFirst().orElse(null);
    }
}
