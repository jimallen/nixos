
{ config, pkgs,home-manager, ... }:

{

    users.users.jim = {
    isNormalUser = true;
#     isSystemUser = true;
    description = "jim";
    extraGroups = [ "networkmanager" "input" "wheel" "video" "audio" "tss" ];
    shell = pkgs.zsh;
    packages = with pkgs; [
      spotify
      vscode
      kitty
      firefox
      slack
      google-chrome
    ];
  };

     home-manager.useUserPackages = true;
     home-manager.useGlobalPkgs = true;
     home-manager.users.jim = {
     home.packages = with pkgs; [ 
      atool 
      pkgs.httpie 
      pkgs.spotify ];
     programs.bash.enable = true;
    /* The home.stateVersion option does not have a default and must be set */
    home.stateVersion = "23.11";
    /* Here goes the rest of your home-manager config, e.g. home.packages = [ pkgs.foo ]; */
  };

    services.logind.extraConfig = "RuntimeDirectorySize=8G";

}





