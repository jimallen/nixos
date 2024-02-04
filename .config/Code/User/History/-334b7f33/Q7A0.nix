
{ config, pkgs, ... }:
let
  home-manager = builtins.fetchTarball "https://github.com/nix-community/home-manager/archive/master.tar.gz";
in
{
  imports = [
    (import "${home-manager}/nixos")
  ];

    users.users.jim = {
    isNormalUser = true;
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

  home-manager.users.my_username = {
     home.packages = [ pkgs.atool pkgs.httpie ];
  programs.bash.enable = true;

    /* The home.stateVersion option does not have a default and must be set */
    home.stateVersion = "23.11";
    /* Here goes the rest of your home-manager config, e.g. home.packages = [ pkgs.foo ]; */
  };

    services.logind.extraConfig = "RuntimeDirectorySize=8G";

}





