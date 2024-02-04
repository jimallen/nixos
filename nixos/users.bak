
{ pkgs,home-manager, ... }:

{


  # Define a user account. Don't forget to set a password with ‘passwd’.
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

home-manager.users.jim = { pkgs, ... }: {
  home.packages = [ pkgs.atool pkgs.httpie ];
  programs.bash.enable = true;

  # The state version is required and should stay at the version you
  # originally installed.
  home.stateVersion = "23.11";
};


  # Change runtime directory size
  services.logind.extraConfig = "RuntimeDirectorySize=8G";
}
