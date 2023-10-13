package learn.fansite.data;

import learn.fansite.models.AppUser;
public interface AppUserRepository {
    AppUser findByUsername(String username);

    AppUser add(AppUser appUser);

}
